# 项目结构重构说明

## 📁 新项目结构

```
src/
├── components/              # React 组件
│   ├── common/             # 通用组件
│   │   ├── Header.tsx      # 头部导航
│   │   ├── Navigation.tsx   # 侧边菜单
│   │   └── index.ts
│   ├── views/              # 页面视图
│   │   ├── HomeView.tsx    # 首页
│   │   ├── PlaceholderViews.tsx  # 其他页面占位符
│   │   └── index.ts
│   └── specific/           # 业务专用组件（待开发）
├── context/                # React Context
│   └── AppContext.tsx      # 全局状态管理
├── hooks/                  # 自定义 Hook
│   └── index.ts           # useLocalStorage, useDebounce, useMediaQuery
├── types/                  # TypeScript 类型定义
│   └── index.ts           # 统一的类型和常量
├── data/                   # 数据层（已有）
│   ├── index.ts           # 统一导出
│   ├── jobs.ts
│   ├── pathways.ts
│   ├── education.ts
│   └── ...其他数据文件
├── lib/                    # 工具函数（已有）
│   └── tabularImport.ts
├── styles/                 # 样式文件
│   └── styles.css         # 全局样式 + Tailwind
├── App.tsx                # 主应用组件
└── main.tsx               # 入口文件（已简化）
```

## 🎯 核心改进

### 1. **状态管理集中化**
- 使用 `AppContext` 统一管理全局状态（currentView, filters, savedJobs）
- 避免状态散落，提高可维护性

### 2. **组件拆分**
- ✅ Header 组件：应用头部
- ✅ Navigation 组件：导航菜单
- ✅ HomeView 组件：首页
- ⏳ PathwaysView、MapView、CompareView、SavedView：占位符（待完成）

### 3. **类型系统**
- 统一的类型定义文件 `src/types/index.ts`
- 常量定义集中（METRIC_LABELS, CATEGORY_COLORS）
- 提高类型安全性

### 4. **Hook 复用**
- `useLocalStorage`：简化 localStorage 操作
- `useDebounce`：搜索防抖
- `useMediaQuery`：响应式设计

### 5. **数据层优化**
- 统一的导出文件 `src/data/index.ts`
- 简化 import 语句，减少重复

### 6. **样式组织**
- Tailwind CSS 为主
- 辅助工具类在 `styles.css` 中
- 易于维护和扩展

## 🚀 后续开发步骤

### 第一阶段（立即）
1. ✅ 迁移现有的四个视图（pathways, map, compare, saved）
   - 提取 main.tsx 中对应的 JSX
   - 放入对应的 View 组件
   - 使用 useApp hook 替换本地状态

2. ✅ 测试重构后的应用是否正常运行

### 第二阶段（优化）
1. 提取通用 UI 组件
   - JobCard：职位卡片
   - FilterPanel：筛选面板
   - MetricsChart：指标图表
   
2. 创建业务 Hook
   - useJobs：职位列表逻辑
   - useFilters：筛选逻辑
   - useSearch：搜索逻辑

3. 增加单元测试

### 第三阶段（增强）
1. 添加路由支持（React Router）
2. 性能优化（React.memo, useMemo）
3. 国际化支持

## 💡 开发建议

### 新增组件时
```typescript
// 总是从顶部导入必要的 hook 和 context
import { useApp } from '../../context/AppContext';
import { METRIC_LABELS } from '../../types';

// 使用类型系统
const MyComponent: React.FC = () => {
  const { currentView, setCurrentView } = useApp();
  // ...
};
```

### 新增状态时
优先考虑：
1. **全局状态** → 放在 `AppContext` 中
2. **组件局部状态** → 使用 `useState`
3. **持久化状态** → 使用 `useLocalStorage` hook

### 新增工具函数时
- 通用工具 → `src/lib/` 或 `src/hooks/`
- 业务逻辑 → 对应组件的同目录或新建 `utils.ts`

## 📝 注意事项

1. **保留原有数据**：所有数据文件保持不变
2. **兼容性**：React 19.2.8，无破坏性更改
3. **性能**：所有组件都使用 React.FC，支持按需加载
4. **样式**：优先使用 Tailwind 类名，避免自定义 CSS

## 🔍 验证重构

运行以下命令验证：
```bash
npm run dev    # 开发模式
npm run build  # 构建
npm run preview # 预览
```

检查点：
- [ ] 应用启动正常
- [ ] 导航切换工作
- [ ] 状态持久化正常（localStorage）
- [ ] 响应式设计正常
- [ ] 没有控制台错误

---

**重构完成时间**：2026-11-06  
**重构者**：Claude Code
