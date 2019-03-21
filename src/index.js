/*module.exports = function getZerosCount(number, base) {

let count_iter=0, bool=false, div=2, temp=number, sum=0;
	while(base%div===0)
	{
		base/=div;  //разложение на простые множители
		count_iter++; //количество вхождений простых множителей
		bool=true;  //новый простой мнодитель учтен
		console.log(div+'^'+count_iter);
	}
	if(bool)  //есть новый простой множитель
	{
		console.log('div='+div);
		while((temp/=div)>=1)    //temp=number, сумма пока рекурентная формула >=1
		{
			sum+=temp;
			console.log('temp='+temp+'  sum='+sum);
		}
		sum=Math.floor(sum/count_iter);
		console.log('end_sum='+sum);
	}
	div++; //проверка на делимость на следующий множитель
	bool=false;
	sum=0;
}*/
module.exports = function getZerosCount(number, base) {
  // your implementation
  let i=0, j=0;
  let div=2, count_iter=0, sum=0, sum_min=0;
  let bool=false;
  let unique=0;
  let temp=number, sum2;
  console.log('number='+number+'; base='+base);
  //prime factorization
  while(base>1)
  {
  	bool=false;
  	count_iter=0;
  	temp=number;
  	while(base%div==0)
  	{
  		unique++;
  		base/=div;
  		count_iter++; //reiterations's count of unique factor
  		console.log(div+'^'+count_iter);
  		bool=true;
  	}
  	if(bool)
  	{
  	sum=0;
  	if(unique>1) temp*div;  	
	  	while((temp/=div)>=1)
	  	{
	  		sum+=temp;
	  		sum=Math.floor(sum);
	  	}
	  	sum=Math.floor(sum/count_iter);
  	}
  	sum_min=sum;
  	div++;
  }
  return sum_min;
}


/*let zero_count=0;
  while(number!=0)
  {
  	number/=5;
  	zero_count+=number;
  }
  zero_count=Math.floor(zero_count);
  return zero_count;*/