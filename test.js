const assert = require('assert');

// 简单的测试
function add(a, b) {
  return a + b;
}

// 运行测试
try {
  assert.strictEqual(add(1, 2), 3, '1 + 2 应该等于 3');
  assert.strictEqual(add(0, 0), 0, '0 + 0 应该等于 0');
  console.log('✅ 所有测试通过！');
  process.exit(0);
} catch (error) {
  console.error('❌ 测试失败:', error.message);
  process.exit(1);
}
