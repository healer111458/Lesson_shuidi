#include <stdio.h>
#include <string.h>
#include <stdlib.h> 
#include <conio.h> 
#define  N  5
struct  PCB
{
	char name[8];
	int  arrive_time;
	int  run_time;
    int finish_time;
	int  zhouzhuan_time;
};
int  total=0; 
struct  PCB  pcb[N],temp;
void  output()
{   
    printf("----------------------------------------------------------------------------------------------\n");
    printf("进程名   到达时间  运行时间  完成时间  周转时间  \n");
	printf("----------------------------------------------------------------------------------------------\n");
    for(int  i=0;i<N;i++)
	{
	  	printf(" %s        %d         %d         %d         %d        \n",pcb[i].name,pcb[i].arrive_time,pcb[i].run_time,pcb[i].finish_time,pcb[i].zhouzhuan_time);
	}
    printf("----------------------------------------------------------------------------------------------\n");
}
void  main()
{   
   
	int i,j;
	for ( i=0;i<N;i++)
	{
		printf("请输入进程名\n" );
        scanf("%s",pcb[i].name);
		printf("请输入到达时间:");
		scanf("%d",&pcb[i].arrive_time);
		printf("请输入要运行时间");
		scanf("%d",&pcb[i].run_time);		
	}
	for( i=0;i<N;i++)
	{  		printf("%s    ",pcb[i].name);
        printf("%d    ",pcb[i].arrive_time);
		printf("%d \n",pcb[i].run_time);
    }

	pcb[0].finish_time=pcb[0].arrive_time+pcb[0].run_time;
	pcb[0].zhouzhuan_time=pcb[0].finish_time-pcb[0].arrive_time;
	

  	for(i=1;i<N;i++)
	{	 
	 
           
            pcb[i].finish_time=pcb[i-1].finish_time+pcb[i].run_time;
            pcb[i].zhouzhuan_time=pcb[i].finish_time-pcb[i].arrive_time;
	 
	}   
	output();
}