// 複素数を表すインターフェース
interface ComplexNumber {
  real: number;
  imaginary: number;
}

// 複素数の加算
export function add(num1: ComplexNumber, num2: ComplexNumber): ComplexNumber {
  return {
    real: num1.real + num2.real,
    imaginary: num1.imaginary + num2.imaginary,
  };
}

// 複素数の減算
export function sub(num1: ComplexNumber, num2: ComplexNumber): ComplexNumber {
  return {
    real: num1.real - num2.real,
    imaginary: num1.imaginary - num2.imaginary,
  };
}

// 複素数の乗算
export function mul(num1: ComplexNumber, num2: ComplexNumber): ComplexNumber {
  return {
    real: num1.real * num2.real - num1.imaginary * num2.imaginary,
    imaginary: num1.real * num2.imaginary + num1.imaginary * num2.real,
  };
}

// 複素数の除算
export function div(num1: ComplexNumber, num2: ComplexNumber): ComplexNumber {
  const denominator = num2.real * num2.real + num2.imaginary * num2.imaginary;
  return {
    real:
      (num1.real * num2.real + num1.imaginary * num2.imaginary) / denominator,
    imaginary:
      (num1.imaginary * num2.real - num1.real * num2.imaginary) / denominator,
  };
}
