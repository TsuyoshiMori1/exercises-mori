import { createIssue, closeIssue, getOpenIssues } from './githubIssues';
import { afterEach, jest } from '@jest/globals';

const baseURL = 'https://api.github.com/repos/TsuyoshiMori1/exercises';
const TOKEN = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `token ${TOKEN}`,
  'Content-Type': 'application/json'
};

describe('GitHub Issue Operations', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  test('createIssue', async () => {
    const title = 'Test Issue';
    const body = 'This is a test issue.';

    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ title, body })
      });
    });
    // 関数を呼び出し
    await createIssue(title, body);

    // fetchが期待通りに呼び出されているか確認
    expect(global.fetch).toHaveBeenCalledWith(`${baseURL}/issues`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        title,
        body
      })
    });
  });

  test('closeIssue', async () => {
    const issueNumber = 1;

    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            id: issueNumber,
            state: 'closed',
            html_url: `http://example.com/issue/${issueNumber}`
          })
      });
    });

    // 関数を呼び出し
    await closeIssue(issueNumber);

    // fetchが期待通りに呼び出されているか確認
    expect(global.fetch).toHaveBeenCalledWith(
      `${baseURL}/issues/${issueNumber}`,
      {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          state: 'closed'
        })
      }
    );
  });

  test('getOpenIssues', async () => {
    const mockIssues = [
      { id: 1, title: 'Open Issue 1' },
      { id: 2, title: 'Open Issue 2' }
    ];

    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockIssues)
      });
    });

    // 関数を呼び出し
    await getOpenIssues();

    // fetchが期待通りに呼び出されているか確認
    expect(global.fetch).toHaveBeenCalledWith(`${baseURL}/issues?state=open`, {
      method: 'GET',
      headers
    });
  });
});
