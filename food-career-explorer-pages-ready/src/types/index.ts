// Job types
export interface Job {
  id: string;
  name: string;
  category: string;
  [key: string]: any;
}

export interface Pathway {
  id: string;
  name: string;
  description: string;
  [key: string]: any;
}

export interface SchoolProfile {
  id: string;
  name: string;
  [key: string]: any;
}

export interface ImportedPosition {
  id: string;
  [key: string]: any;
}

// View types
export type View = 'home' | 'pathways' | 'map' | 'compare' | 'saved';

// Filter types
export interface FilterState {
  searchQuery: string;
  selectedCategories: string[];
  selectedMetrics: string[];
  [key: string]: any;
}

// Constants
export const METRIC_LABELS = [
  ['majorMatch', '专业匹配'],
  ['technology', '技术含量'],
  ['income', '收入上限'],
  ['stability', '稳定性'],
  ['development', '发展空间'],
  ['pressure', '工作压力'],
  ['shift', '倒班概率'],
  ['overtime', '加班概率'],
  ['travel', '出差概率'],
  ['communication', '沟通强度'],
  ['sales', '销售属性']
] as const;

export const CATEGORY_COLORS: Record<string, string> = {
  '食品质量': 'green',
  '食品研发': 'orange',
  '生产': 'blue',
  '供应链': 'cyan',
  '采购': 'pink',
  '销售': 'purple',
  '检测与监管': 'gray',
  '设备与工程': 'blue',
  '法规与注册': 'cyan',
  '产品与市场': 'purple'
};
