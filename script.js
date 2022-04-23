
	
	//Метод every() проверяет, удовлетворяют ли все элементы 
	//массива условию, заданному в передаваемой функции.

	//Обратите внимание: метод возвращает true при любом 
	//условии для пустого массива.

	//Возвращаемое значение
	//true если функция проверки возвращает truthy значение 
	//для каждого элемента массива. Иначе, false.
function MyArray() {
	
}

MyArray.prototype = new MyArryProto();

const myArr1 = new MyArray(1, 2, 3);

function MyArryProto() {
	//every
	this.every = function every(fn) {
		for (let i = 0; i < this.length; i++) {
			if(!fn(this[i], i, this)) {
				return false;
			}
		  return true;
		}
	}
}