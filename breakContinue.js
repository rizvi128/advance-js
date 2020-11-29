const nums = [-1, -3, -4, 2, -4, 23];
for (let i = 0; i < nums.length; i++) {
   
    if(nums[i]>3){
        break;
    }
    //console.log(nums[i]);
    
}
for (let i = 0; i < nums.length; i++) {
   
    if(nums[i]<0){
        continue;
    }
    console.log(nums[i]);
}