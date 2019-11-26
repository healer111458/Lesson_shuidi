
#include "string.h" 

#include "iostream"

#include "iomanip"

using namespace std;

#define FALSE 0 

#define TRUE 1 

#define W 10

#define R 20

int FINISH[W];

int M ; //总进程数

int N ; //资源种类 

int ALL_RESOURCE[W];//各种资源的数目总和

int MAX[W][R]; //M个进程对N类资源最大资源需求量

int AVAILABLE[R]; //系统可用资源数

int ALLOCATION[W][R]; //M个进程已经得到N类资源的资源量

int NEED[W][R]; //M个进程还需要N类资源的资源量

int Request[R]; //请求资源个数

int WORK[100];

int Q[100];

int L=0;
//int FINISH[100];

void showdata() //函数showdata,输出资源分配情况

{ 

   int i,j; 
   
cout<<" ————————————————————————"<<endl;

   cout<<"各种资源的总数量(all):"<<endl; 

   cout<<"  "; 

   for (j=0;j<N;j++)cout<<" 资源"<<j<<": "<<ALL_RESOURCE[j]; 

   cout<<endl<<endl; 

   cout<<"系统目前各种资源可用的数为(available):"<<endl; 

   cout<<"  "; 

   for (j=0;j<N;j++)cout<<" 资源"<<j<<": "<<AVAILABLE[j]; 

   cout<<endl<<endl; 

   cout<<"—————————————————————";

   cout<<" 各进程还需要的资源量(need):"<<endl<<endl; 

   cout<<"      ";

   for (j=0;j<N;j++)cout<<setw(8)<<"资源"<<j;

   //cout<<"       资源0"<<"     资源1"<<"    资源2"<<endl;

   //for (i=0;i<M;i++) 

   for (i=0;i<M;i++) 

   { 

     cout<<endl<<"进程p"<<i<<":"; 

     for (j=0;j<N;j++)cout<<setw(8)<<NEED[i][j];//<<"   ";//; 

     //cout<<endl; 

   } 

   cout<<endl; 

   cout<<"—————————————————————";

   cout<<" 各进程已经得到的资源量(allocation): "<<endl<<endl;
   
   cout<<"      ";


   for (j=0;j<N;j++)cout<<setw(8)<<"资源"<<j;

   //cout<<"       资源0"<<"     资源1"<<"     资源2"<<endl;

   for (i=0;i<M;i++) //0

   { 

     cout<<endl<<"进程p"<<i<<":"; 

     for (j=0;j<N;j++)cout<<setw(8)<<ALLOCATION[i][j];//<<"       "; 

     //cout<<endl; 

   } 

   cout<<endl;
   
   /*  
       for (i=0;i<M;i++)
	   for (j=0;j<N;j++){
	   if (NEED[i][j]!=0)
		cout<<"进程p"<<i<<"状态：  运行结束"<<endl;
	   else 
		   cout<<"进程p"<<i<<"状态：  等待调用"<<endl;}
   */
   

} 

void changdata(int k) //函数changdata,改变可用资源和已经拿到资源和还需要的资源的值

{ 

   int j; 

   for (j=0;j<N;j++) 

   { AVAILABLE[j]=AVAILABLE[j]-Request[j]; 

     ALLOCATION[k][j]=ALLOCATION[k][j]+Request[j]; 

     NEED[k][j]=NEED[k][j]-Request[j];

	 //WORK[j]=AVAILABLE[j];
   }
}

void rstordata(int k) //函数rstordata,恢复可用资源和已经拿到资源和还需要的资源的值

{  int j; 

   for (j=0;j<N;j++) 

   { AVAILABLE[j]=AVAILABLE[j]+Request[j]; 

     ALLOCATION[k][j]=ALLOCATION[k][j]-Request[j]; 

     NEED[k][j]=NEED[k][j]+Request[j];
	 
	 //WORK[j]=AVAILABLE[j];

   }
}

int chkerr(int s) //函数chkerr,检查是否安全

{ int WORKrest;//FINISH[W] 

    int i,j,k=0; 

    for(i=0;i<M;i++)FINISH[i]=FALSE; 

    for(j=0;j<N;j++) 

     {

        WORKrest=AVAILABLE[j]; 

        i=s; 

        do

            { 

          if(FINISH[i]==FALSE&&NEED[i][j]<=WORKrest)

            {

                   WORKrest=WORKrest+ALLOCATION[i][j]; 

                   FINISH[i]=TRUE; 

                   i=0; 

            } 

          else 

            { 
			  i++; 
            } 

            }while(i<M);

        for(i=0;i<M;i++) 

        if(FINISH[i]==FALSE) 

            {

            cout<<endl; 

            cout<<" 系统不安全!!! 本次资源申请不成功!!!"<<endl;     

            cout<<endl; 

            return 1;

			  cout<<"进程p"<<i<<"状态：  阻塞"<<endl;
	          //else 
	          //cout<<"进程p"<<i<<"状态：  等待调用"<<endl;
 

            } 

     } 

    cout<<endl; 

    cout<<" 经安全性检查，系统安全，本次分配成功。"<<endl; 

    cout<<endl; 

    return 0; 

}
 void set()
 {
	 int t[10];
	 for(int i=0;i<M;i++){
		 t[i]=0;
		 for(int j=0;j<N;j++){if(NEED[i][j]==0) t[i]+=1;}
	 }
	 for(i=0;i<M;i++)
		 if(t[i]==N)
		 {cout<<"进程p"<<i<<"状态：  运行结束"<<endl;
		 for(int k=0;k<N;k++) 
			 AVAILABLE[k]=AVAILABLE[k]+ALLOCATION[i][k];
		     ALLOCATION[i][k]=0;
		 }
		 else 
			 cout<<"进程p"<<i<<"状态：  等待调用"<<endl;
 }

 void safe()       //对进程进行安全行检查,此时是否存在安全性序列
{ cout<<endl<<"···现在计算机自动检测是否存在安全序列···"<<endl;
	int i,j;
	for(j=0;j<N;j++)
		WORK[j]=AVAILABLE[j];//cout<<"a"<<WORK[j];

	//int q[100];
	int flag=0;
	for(i=0; i<M;i++)
		FINISH[i]=FALSE;//chushi
	for(i=0; i<M;i++)
	{
		if(FINISH[i]==FALSE)
		{
			flag=0;
			for(j=0; j<N; j++)
			{   //cout<<WORK[i]<<"  ";
				//WORK[j]=AVAILABLE[j];cout<<"a"<<WORK[j];
				if(WORK[j]>=NEED[i][j])
					flag=flag+1;
				else
					break;
			}  
			if(flag==N)
			{
				Q[L]=i;   //cout<<Q[L]<<"ql"<<L<<endl;
				FINISH[i]=TRUE;
				for(j=0; j<N;j++)
				{
					WORK[j]=WORK[j]+ALLOCATION[i][j];//cout<<"b"<<WORK[j];
					
				}
				L=L+1;     //cout<<L<<endl;
				cout<<"进程p"<<i<<"资源释放后系统目前各种资源可用的数为(available):"<<endl;// cout<<"*********************";		cout<<"l"<<L<<endl;					
				cout<<endl;
				for (j=0;j<N;j++)
					cout<<"  "<<"资源"<<j<<": "<<WORK[j]; 
				cout<<endl<<endl; 				
				i=0;
			}
		}
		else;
		//i++;
	//cout<<"i"<<i<<endl;//cout<<q[l]<<"ql"<<i<<endl;
	}
	
}

int test()
{
	if (L<M)
	{
	   cout<<"\n当前状态不安全!!!!!";	   
	   cout<<"不存在安全序列 "<<endl;
	   cout<<"^^^您不能向系统申请资源^^^"<<endl;
	   cout<<"………计算机检测结束………"<<endl;
	   return 0;
	}
   else
   {
	   int i;
	   //l=0;
	   cout<<"\n此时处于安全的状态!!!"<<endl;
	   cout<<endl;
	   cout<<"安全序列是:   ";
	   for (i=0; i<M; i++)
	   {
		   cout<<"进程"<<"p"<<Q[i]<<" --> ";		   
		   FINISH[i]=FALSE;  
	   }	  
	   cout<<endl;
	   cout<<"………计算机检测结束………"<<endl;

	    return 1;
   }
   //cout<<endl<<"计算机检测结束"<<endl;
}
 
void bank()   //银行家算法

{

     int  i=0,j=0; 
	   //i=0;intj=0;

     char flag='Y'; 

     

     while(flag=='Y'||flag=='y') 

     { 

       i=-1; 

       while(i<0||i>=M) 

        { cout<<endl;

         cout<<" 请输入需申请资源的进程号（从P0到P"<<M-1<<"，否则重输入!）:"; 

         cout<<"p";cin>>i; 

         if(i<0||i>=M)cout<<" 输入的进程号不存在，重新输入!"<<endl; 

        } 

      cout<<" 请输入进程P"<<i<<"申请的资源数:"<<endl; 

         for (j=0;j<N;j++) 

		 { 
 
           cout<<" 资源"<<j<<": "; 

           cin>>Request[j];

             if(Request[j]>NEED[i][j]) //若请求的资源数大于进程还需要i类资源的资源量j

			 { 

              cout<<" 进程P"<<i<<"申请的资源数大于进程P"<<i<<"还需要"<<j<<"类资源的资源量!"; 

              cout<<"申请不合理，出错!请重新选择!"<<endl<<endl; 

              flag='N'; 

              break; 

			 } 

                  else 

				  {

                     if(Request[j]>AVAILABLE[j]) //若请求的资源数大于可用资源数

					 { 

                      cout<<" 进程P"<<i<<"申请的资源数大于系统可用"<<j<<"类资源的资源量!"; 


                      cout<<"申请不合理，出错!请重新选择!"<<endl<<endl; 

                      flag='N'; 

                      break; 

					 } 

				  } 

		 } 

     if(flag=='Y'||flag=='y') 

     { 

      changdata(i); //调用changdata(i)函数，改变资源数

      if(chkerr(i)) //若系统不安全

	  { 

            rstordata(i); //调用rstordata(i)函数，恢复资源数

            showdata();   //输出资源分配情况

	  } 

      else  {     //若系统安全 

      showdata(); //输出资源分配情况
      
      /* super buge 没有释放拥有的资源*/
      
      
      
       
	  set();
	  }

     } 

      else      //若flag=N||flag=n

      showdata(); 
	  

      cout<<endl; 

      cout<<" 是否继续银行家算法演示,按'Y'或'y'键继续,按'N'或'n'键退出演示: "; 

      cin>>flag; 

     }
	
} 


/*void set()
{for(int i=0;i<=M;i++)
	if (flag=='y'||flag=='Y')
    cout<<"进程p"<<i<<"状态：  运行结束"<<endl;
	else 
	cout<<"进程p"<<i<<"状态：  等待调用"<<endl;

}*/




void main() //主函数

{
	cout<<"********************************"<<endl;
	cout<<"欢迎使用银行家安全性算法模拟程序"<<endl;
	cout<<endl;
	cout<<"     本程序由晓光编制完成       "<<endl;
	cout<<"   gyzhangxiaoguang@126.com    "<<endl;
	cout<<"  学号061114031  班级2006教育   "<<endl;
	cout<<endl;
	cout<<"********************************"<<endl;

   int i=0,j=0,p; 

   do{cout<<"请输入总进程数:"<<endl;

   cin>>M;}while(M<0);

   do{cout<<"请输入总资源种类:"<<endl;

   cin>>N;}while(N<0);

  cout<<"请输入总资源数(all_resource):"<<endl;

   for(i=0;i<N;i++)

   {cout<<"资源"<<i<<":"; cin>>ALL_RESOURCE[i];}

   cout<<"依次输入各进程所需要的最大资源数量(max):"<<endl;

   for (i=0;i<M;i++)//M是总进程个数

   {

      for (j=0;j<N;j++)//N是总资源种类

	  { // cout<<"进程"<<i<<"所需";

        do

         {
			 cout<<"进程"<<i<<"所需";
			 
			 cout<<j<<"类资源的数目：";

			 cin>>MAX[i][j];
			 
			 if (MAX[i][j]>ALL_RESOURCE[j])         //最大需求量小于资源的总数
				 
				 cout<<endl<<"所需资源超过了声明的该资源总数,请重新输入"<<endl;

          }while (MAX[i][j]>ALL_RESOURCE[j]);

      }

}


cout<<"依次输入各进程已经占据的资源数量(allocation):"<<endl;

for (i=0;i<M;i++)

{ //cout<<"进程"<<i+1<<"已占有";

    for (j=0;j<N;j++)

     {//cout<<"进程"<<i<<"已占有";

       do

         {cout<<"进程"<<i<<"已占有";
			 
		  cout<<j<<"类资源的数目：";

          cin>>ALLOCATION[i][j];

          if (ALLOCATION[i][j]>MAX[i][j])

          cout<<endl<<"占有资源超过了所需的最大资源,请重新输入"<<endl;

          }while (ALLOCATION[i][j]>MAX[i][j]);

         }

     }


     //初始化资源数量

      for (j=0;j<N;j++)

      { p=ALL_RESOURCE[j];

         for (i=0;i<M;i++)

          {

           p=p-ALLOCATION[i][j];//减去已经被占据的资源

           AVAILABLE[j]=p;

           if(AVAILABLE[j]<0)

           AVAILABLE[j]=0;

           }

     }


      for (i=0;i<M;i++)

      for(j=0;j<N;j++)

         NEED[i][j]=MAX[i][j]-ALLOCATION[i][j];
	  safe();

	  //cout<<endl<<"手动申请资源"<<endl;

      //showdata();

	 // safe();

	 if (test()==0);
	   // showdata();
	 else{
	  char letter;
	  cout<<endl<<"如果需要手动为进程申请资源,\n请输入字母 k :";
	  cin>>letter;
	  if (letter=='k')
	  {showdata();
      bank();};
	  //set();
	 };
}