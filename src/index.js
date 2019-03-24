module.exports = function getZerosCount(number, base) {
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