function convert(jsonObj: any): any {
  if (Array.isArray(jsonObj)) {
    // 递归调用 conver 转换
    return jsonObj.map(convert);
  } else if (typeof jsonObj === 'object' && jsonObj !== null) {
    return Object.keys(jsonObj).reduce((acc: any, key: string) => {
      const newKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
      // 将转换后的 key 作为新的 key，递归调用 convert 转换 value 中的 json 小驼峰
      acc[newKey] = convert(jsonObj[key]);
      return acc;
    }, {});
  }
  return jsonObj;
}

test('convert', () => {
  expect(convert({ a_b: 1 })).toEqual({ aB: 1 });
  expect(convert({ a_b: { c_d: 2 } })).toEqual({ aB: { cD: 2 } });
  expect(convert({ a_b: [{ c_d: 2 }] })).toEqual({ aB: [{ cD: 2 }] });
  expect(convert({ a_b: [{ c_d: 2 }, { e_f: 3 }] })).toEqual({ aB: [{ cD: 2 }, { eF: 3 }] });
  expect(convert({ a_b: [{ c_d: 2 }, { e_f: 3 }], g_h: 4 })).toEqual({ aB: [{ cD: 2 }, { eF: 3 }], gH: 4 });
})
