import React from "react";

const CreateBlogPage = () => {
  return (
    <div>
      <h2>ブログ新規作成</h2>

      <form className="bg-slate-200 p-6 rounded shadow-lg">
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
