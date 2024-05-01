for (var name in statistics) 
{
    if (statistics[name] % 2 != 0 || name[0] == 'r') 
    {
        console.log(statistics[name]);
    }
}
