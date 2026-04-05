# Whitelist 📋

## 🤔 Что такое whitelist?
**Whitelist** (белый список) — это список игроков, которым разрешено заходить на сервер.
Если игрока нет в whitelist, сервер его просто не пустит 🛑

---

## 🚀 Как включить whitelist?
В панели управления или в консоли введите:

```mcfunction
whitelist on
```

---

## ➕ Как добавить игрока?
```mcfunction
whitelist add НикИгрока
```

**Пример:**
```mcfunction
whitelist add Steve
```

---

## ➖ Как удалить игрока?
```mcfunction
whitelist remove НикИгрока
```

**Пример:**
```mcfunction
whitelist remove Steve
```

---

## ⚠️ Важные моменты
Если сервер работает в **Offline Mode**, whitelist может вести себя не так, как ожидается, потому что Minecraft может определять игроков по новым оффлайн UUID.
