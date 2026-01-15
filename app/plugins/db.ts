import { IndexedCache } from "@yeying-community/yeying-next";

let indexedCache: IndexedCache = new IndexedCache("yeying-protal", 1);

// 初始化提供者
async function initializeProviders() {
  await indexedCache.open([
    {
      // 表名
      name: "applications",
      // 主键字段
      key: "uid",
      // 主键是否自增，走采用 uuid 作为主键
      autoIncrement: false,
      // 索引：keyPath 表示列名； name 表示索引名； unique 表示字段值是否唯一
      indexes: [{ keyPath: "owner", name: "owner", unique: false }],
    },
    {
      name: "services",
      key: "uid",
      autoIncrement: false,
      indexes: [{ keyPath: "owner", name: "owner", unique: false }],
    },
    {
      // 表名
      name: "applications_apply",
      // 主键字段
      key: "uid",
      // 主键是否自增，走采用 uuid 作为主键
      autoIncrement: false,
      // 索引：keyPath 表示列名； name 表示索引名； unique 表示字段值是否唯一
      indexes: [{ keyPath: "applyOwner", name: "applyOwner", unique: false }],
    },
    {
      name: "services_apply",
      key: "uid",
      autoIncrement: false,
      indexes: [{ keyPath: "applyOwner", name: "applyOwner", unique: false }],
    },
  ]);
}

export { initializeProviders, indexedCache };
