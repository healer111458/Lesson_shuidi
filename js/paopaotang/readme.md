- 泡泡堂游戏的主业务逻辑抽象
    面向对象核心思想：抽象（函数）、封装、继承、多态
    八实现细节抽象起来：创业 
    - CEO  负责：做梦（来旅梦，去名企，具有需求（2020后）+可执行团队）
      抽象的 -> 员工来实现，（前端、后端、美工、函数）  封装
    - 工厂类  抽象化 -> 队友 与 敌人
      playerFactory(name,teamColor)  代理产生实例的过程
      players 实例化的过程建立好这个关系  
        Player 玩家类
        playerFactory 类  工厂的模式去生产
        单个对象去面向对象的集合  生产过程   工厂化
        -属性：
          partners []  
          enemies []  
          state = 'live'  生存
        -方法：
          die()
          lose()
          win()
          all_dead = true   只需判断一个state为live

