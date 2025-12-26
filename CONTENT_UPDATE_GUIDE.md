# 網站內容修改指南

這是一個靜態網站，所有的內容（文字、圖片）都直接寫在程式碼檔案中。
別擔心，您不需要是程式設計師也能修改！只要找到對應的檔案，修改「引號」裡的文字即可。

所有的檔案都在 `src/components` 資料夾裡面。

---

## 1. 修改最新消息
**檔案位置**：`src/components/News.jsx`

找到 `newsItems` 這一段：

```javascript
const newsItems = [
    {
        id: 1,
        date: '2025-03-15',  // 修改日期
        title: '木管五重奏...', // 修改標題
        category: '比賽捷報', // 修改分類
        // ...
        description: '恭喜本社...', // 修改內容
    },
    // ...
];
```

**如何新增一則消息？**
複製從 `{` 到 `},` 的整段內容，貼在最上面，然後修改裡面的字即可。

---

## 2. 修改行事曆
**檔案位置**：`src/components/Schedule.jsx`

找到 `events` 這一段：

```javascript
const events = [
    { month: '9月', event: '期初茶會', type: 'activity' },
    // ...
];
```

---

## 3. 修改首頁圖片
**檔案位置**：`src/components/Hero.jsx`

找到類似這樣的一行：
```javascript
<img src="https://images.unsplash.com/..." ... />
```
把 `src="..."` 裡面的網址換成您新的照片網址。
如果您有還有照片檔案 (jpg/png)，可以把它們放在 `public` 資料夾，然後改成 `src="/your-photo.jpg"`。

---

## 4. 修改幹部名單
**檔案位置**：`src/components/Team.jsx`

裡面有 `officers` (幹部) 的清單，修改方式跟最新消息一樣。

---

## 修改完後怎麼辦？
修改存檔後，如果您是在自己電腦上預覽 (`npm run dev`)，網頁會自動更新。
確認沒問題後，您需要重新執行部署指令 (例如上傳到 GitHub) 才會在網路上更新。
