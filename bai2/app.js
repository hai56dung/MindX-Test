// Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

let heightTeam = [60,40,55,75,64];
let team1 = 0;
let team2 = 0;
for (let i = 0; i<heightTeam.length; i++){
    if( i%2 == 0){
        team1 += heightTeam[i];
    }
    if( i%2 == 1){
        team2 += heightTeam[i];
    }
}
console.log(team1);
console.log(team2);

