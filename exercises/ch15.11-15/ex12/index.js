$(document).ready(function () {
  // アップロードボタンがクリックされたとき
  $("#uploadButton").click(function () {
    const accessToken = $("#accessToken").val();
    const fileInput = $("#fileInput")[0];

    // アクセストークンとファイルが選択されているかを確認
    if (!accessToken) {
      alert("アクセストークンを入力してください");
      return;
    }
    if (!fileInput.files.length) {
      alert("ファイルを選択してください");
      return;
    }

    const file = fileInput.files[0];
    uploadFileToOneDrive(accessToken, file);
  });

  // OneDrive へファイルをアップロードする関数
  function uploadFileToOneDrive(accessToken, file) {
    const fileName = file.name;

    // Graph APIのアップロードURL
    const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/Documents/${fileName}:/content`;

    // ファイルアップロードの開始
    $("#status").text("アップロード中...");

    $.ajax({
      url: uploadUrl,
      type: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: file,
      processData: false,
      contentType: false,
      success: function (response) {
        $("#status").text("ファイルが正常にアップロードされました");
      },
      error: function (xhr, status, error) {
        $("#status").text("エラーが発生しました: " + error);
      },
    });
  }
});
