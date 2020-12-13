function printStars(n)
{
    let stars = '*';
    for (let i= 0 ; i <n ; i++)
    {
        console.log(stars)
        stars += '*';
    }
}

function printBackwardsStars(n)
{
    for (let i =0 ; i<n ; i++)
    {
        let stars = '';
        for (let j= 0 ; j <n-i ; j++)
        {
            stars += '*';
        }
        console.log(stars)
    }
}


function printStarSeries(num,count)
{
    for(let i = 0; i<count ; i++ )
    {
        printStars(num)
        printBackwardsStars(num)
        console.log('')
    }
}
//printStarSeries(5, 3)


const reverse = function(str){
    
    let reversed = ''
    for(let i =0; i<str.length ; i++)
    {
        reversed += str[str.length-i-1]  
    }
    return reversed
}
//console.log(reverse('god'))


function isPalindrom(str)
{
    for(let i=0;i<(str.length - str.length%2)/2 ; i++)
    {
        if (str[i] != str[str.length -i-1])
        {
            return false
        }
        return true
    }
}
//console.log(isPalindrom('catotac'))