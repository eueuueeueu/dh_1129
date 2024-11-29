// 对象 object
// 它和数组相似 是按照一定规则存储数据的结构
// 对象  只不过key值可以为  字符串/数字
// 对象如何定义  {}
// 对象中的键值对 key-value
// 一一对应关系
// 对象描述的是string/number和任意数据类型的 一种一一对应的关系的结构

// 使用对象结构来定义数组(数组是一种特殊的对象)
let a1 = [false, true, 1, null, undefined]
let o1 = { 0: false, 1: true, 2: 1, 3: null, 4: undefined, 'length': 5 }

// 结构决定性质
for (let i = 0; i < o1.length; i++) {
  // 使用通过的取值语法 数据[属性/索引]
  console.log(o1[i]);
}

let o2 = { 0: 11, 2: 22, 4: 33, 6: 44, length: 4 }
for (let i = 0; i < o2.length; i++) {
  console.log(o2[i * 2]);
}


// 不是所有的对象都可以使用for循环（具备length属性且length表达的是除length属性之外的属性的个数，其他属性是数字且具备一定规律）

// 一般使用对象的场景：对客观事物的一种抽象
// 身份证
const DongHao = {
  姓名: '董浩',
  出生日期: '2004.01.05',
  发证机关: '阳新县公安局',
  密钥: 'xxxxxxxxxxx',
  1: '测试数字属性'
}
// 读取某个信息
// 通用的取值方式
console.log(DongHao['姓名']);
// 如果你要获取的对象的属性是一个非数字的字符串那么我们可以使用'对象.属性'取值
console.log(DongHao.出生日期);
// DongHao.1会被编译器改成DongHao[1]，因为.1会被错误识别为0.1
console.log(DongHao[1]);


// 抽象：对你关注的实体的主要特征进行描述并用key-value形式保存

// 遍历对象(对任意对象进行遍历)
for (let key in DongHao) {
  console.log(key, '->', DongHao[key]);
}

// 对象的特性
// 对象的属性一定是唯一的  如果出现重复属性 那么 后来者居上
let parson1 = {
  name: '王林',
  age: 100,
  age: 123
}
console.log(parson1);

// 对象是可变的  (我们可以修改对象已存在的属性  也可以增加不存在的属性  当然也可以删除属性)
// 增
let o3 = {
  gender: '男'
}
o3.name = '张三'
o3.age = 18
console.log(o3);
// 改
o3.gender = '女'
console.log(o3);
// 删    delete
delete o3.gender
console.log(o3);
// 查
console.log(o3.name);


/**
 * 对象
 * 1.如何创建一个对象
 * 2.对象的属性可以使用哪些数据类型
 * 3.如何对对象进行增删改查
 * 4.如何遍历对象
 * 5.理解对象是可变的
 */