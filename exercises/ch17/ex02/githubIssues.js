// リクエストを設定
const baseURL = 'https://api.github.com/repos/TsuyoshiMori1/exercises';
const TOKEN = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `token ${TOKEN}`,
  'Content-Type': 'application/json'
};
let isVerbose = false;

// Issue を作成できる
export async function createIssue(title, body) {
  try {
    const response = await fetch(`${baseURL}/issues`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        title,
        body
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(title, body);
      console.log(response);
      throw new Error(data.message);
    }

    console.log('Success to create issue');

    if (isVerbose) {
      console.log(response);
    }
  } catch (e) {
    console.log(e.message);
  }
}

// 指定した Issue をクローズできる
export async function closeIssue(issueNumber) {
  try {
    const response = await fetch(`${baseURL}/issues/${issueNumber}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        state: 'closed'
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }

    console.log('Success to close issue', data.html_url);

    if (isVerbose) {
      console.log(response);
    }
  } catch (e) {
    console.log(e.message);
  }
}

// オープンな Issue の Id と Title の一覧を表示できる
export async function getOpenIssues() {
  try {
    const response = await fetch(`${baseURL}/issues?state=open`, {
      method: 'GET',
      headers
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(response);
      throw new Error(data.message);
    }
    data.forEach((issue) => {
      console.log(`#${issue.id}: ${issue.title}`);
    });
    if (isVerbose) {
      console.log(response);
    }
  } catch (e) {
    console.log(e.message);
  }
}

/**
// 入力はコマンドライン引数から受け取る
const args = process.argv.slice(2);
const command = args[0];

if (args[1] == '-v' || args[1] == '--verbose') {
  isVerbose = true;
}

switch (command) {
  case 'create':
    createIssue(args[1], args[2]);
    break;
  case 'close':
    closeIssue(args[1]);
    break;
  case 'list':
    getOpenIssues();
    break;
  case '-h':
  case '--help':
    console.log(`
        create  issueを作成します。
        close   issueをクローズします。 
        list    オープンな Issue の Id と Title の一覧を表示します。
      `);
}
**/
