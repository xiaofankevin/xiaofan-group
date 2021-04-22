var bases=[
    {basename:'早餐汉堡',items:[{id:1,name:'猪肉堡',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_905022_320.png"},
                                {id:2,name:'板烧鸡腿肉夹馍',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_906800_320.png"}]},
    {basename:'超值早餐',items:[{id:1,name:'汉堡双人餐',count:30,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901384_320.png"},
                                {id:2,name:'脆皮鸡薯饼套餐',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901382_320.png"},
                                {id:3,name:'板烧鸡腿香肠套餐',count:35.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900484_320.png"}]},
    {basename:'汉堡薯饼套餐',items:[{id:1,name:'猪肉堡套餐',count:27,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900123_320.png"},
                                {id:2,name:'香肠炒蛋堡套餐',count:25,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900750_320.png"},
                                {id:3,name:'板烧鸡腿套餐',count:22,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900120_320.png"},
                                {id:4,name:'吉士炒蛋堡套餐',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900124_320.png"}]}]
var lunches =[
        {basename:'主食',items:[{id:1,name:'板烧鸡腿堡',count:21,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901406_320.png"},
                                        {id:2,name:'麦辣鸡腿堡',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901440_320.png"},
                                        {id:2,name:'巨无霸',count:24,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901100_320.png"},
                                        {id:3,name:'麦香鸡',count:13,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901450_320.png"},
                                        {id:4,name:'麦香鱼',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901600_320.png"},
                                        {id:5,name:'牛肉培根堡',count:33,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900156_320.png"},
                                        {id:6,name:'牛肉芝士堡',count:31,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900159_320.png"},
                                        {id:7,name:'吉士汉堡',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901120_320.png"}]},
        {basename:'单人超值套餐',items:[{id:1,name:'板烧鸡腿套餐',count:35,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900261_320.png"},
                                        {id:2,name:'麦辣鸡腿堡套餐',count:36,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900260_320.png"},
                                        {id:3,name:'麦香鸡套餐',count:29,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900626_320.png"},
                                        {id:4,name:'麦香鱼套餐',count:34,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900627_320.png"},
                                        {id:5,name:'吉士汉堡套餐',count:26,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900625_320.png"},
                                        {id:6,name:'巨无霸套餐',count:39,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900687_320.png"},
                                        {id:7,name:'蔬菜培根双层牛肉堡套餐',count:37,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900630_320.png"}]},
        {basename:'多人套餐',items:[{id:1,name:'大鸡腿乐享三人餐',count:119,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901312_320.png"},
                                    {id:2,name:'海陆空套餐',count:90,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900747_320.png"},
                                    {id:3,name:'吃鸡丰盛套餐',count:60,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900775_320.png"},
                                    {id:4,name:'吃鸡双人套餐',count:45,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900693_320.png"}]},
        {basename:'超值桶',items:[{id:1,name:'炸鸡桶',count:40,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901704_320.png"},
                                  {id:2,name:'汉堡炸鸡桶',count:88,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901346_320.png"},
                                  {id:3,name:'炸鸡可乐桶',count:88,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901143_320.png"},
                                  {id:3,name:'小食桶',count:39,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901424_320.png"},]},
        {basename:'小食甜品',items:[{id:1,name:'薯条',count:12.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_501205_320.png"},
                                  {id:2,name:'鸡块',count:12.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901401_320.png"},
                                  {id:2,name:'鸡翅',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901700_320.png"},
                                  {id:3,name:'鸡排',count:13,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_501208_320.png"},
                                  {id:4,name:'美味大鸡排',count:14.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901421_320.png"},
                                  {id:5,name:'香芋派',count:7.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904106_320.png"},
                                  {id:6,name:'菠萝派',count:7.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904105_320.png"},
                                  {id:6,name:'玉米杯',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904437_320.png"},
                                  {id:6,name:'蔬菜沙拉',count:14,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900515_320.png"},
                                  {id:6,name:'巧克力冰激凌',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904410_320.png"}]},
        {basename:'饮品',items:[{id:1,name:'可口可乐',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903050_320.png"},
                                {id:2,name:'雪碧',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903060_320.png"},
                                {id:3,name:'纯牛奶',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903755_320.png"},
                                {id:4,name:'橙汁',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_906352_320.png"},
                                {id:5,name:'苹果汁',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901027_320.png"},
                                {id:6,name:'鲜煮咖啡',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903519_320.png"},
                                {id:7,name:'热朱古力',count:13,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903605_320.png"},
                                {id:8,name:'珍珠奶茶',count:15.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900655_320.png"},
                                {id:9,name:'纯净水',count:8,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903757_320.png"},]}]
    
var dinners =[
            {basename:'主食',items:[{id:1,name:'板烧鸡腿堡',count:21,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901406_320.png"},
                                    {id:2,name:'麦辣鸡腿堡',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901440_320.png"},
                                    {id:2,name:'巨无霸',count:24,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901100_320.png"},
                                    {id:3,name:'麦香鸡',count:13,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901450_320.png"},
                                    {id:4,name:'麦香鱼',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901600_320.png"},
                                    {id:5,name:'牛肉培根堡',count:33,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900156_320.png"},
                                    {id:6,name:'牛肉芝士堡',count:31,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900159_320.png"},
                                    {id:7,name:'吉士汉堡',count:20,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901120_320.png"}]},
            {basename:'单人超值套餐',items:[{id:1,name:'板烧鸡腿套餐',count:35,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900261_320.png"},
                                            {id:2,name:'麦辣鸡腿堡套餐',count:36,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900260_320.png"},
                                            {id:3,name:'麦香鸡套餐',count:29,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900626_320.png"},
                                            {id:4,name:'麦香鱼套餐',count:34,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900627_320.png"},
                                            {id:5,name:'吉士汉堡套餐',count:26,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900625_320.png"},
                                            {id:6,name:'巨无霸套餐',count:39,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900687_320.png"},
                                            {id:7,name:'蔬菜培根双层牛肉堡套餐',count:37,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900630_320.png"}]},
            {basename:'超值晚餐',items:[{id:1,name:'芝士牛肉堡套餐',count:45,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900160_320.png"},
                                        {id:2,name:'牛肉培根堡套餐',count:46.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900157_320.png"},
                                        {id:3,name:'双层牛肉芝士堡套餐',count:57,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900364_320.png"},
                                        {id:4,name:'双层牛肉培根堡套餐',count:60 ,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900361_320.png"},
                                        {id:4,name:'鸡肉双吃套餐',count:27 ,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900165_320.png"},
                                        {id:4,name:'鱼肉蔬菜套餐',count:48.5 ,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900092_320.png"},
                                        {id:4,name:'吉士鸡翅套餐',count:25,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900091_320.png"},
                                        {id:4,name:'儿童乐园餐',count:23.5 ,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900556_320.png"},]},
            {basename:'多人套餐',items:[{id:1,name:'大鸡腿乐享三人餐',count:119,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901312_320.png"},
                                        {id:2,name:'海陆空套餐',count:90,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900747_320.png"},
                                        {id:3,name:'吃鸡丰盛套餐',count:60,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900775_320.png"},
                                        {id:4,name:'吃鸡双人套餐',count:45,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900693_320.png"}]},
            {basename:'超值桶',items:[{id:1,name:'炸鸡桶',count:40,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901704_320.png"},
                                      {id:2,name:'汉堡炸鸡桶',count:88,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901346_320.png"},
                                      {id:3,name:'炸鸡可乐桶',count:88,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901143_320.png"},
                                      {id:3,name:'小食桶',count:39,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901424_320.png"},]},
            {basename:'小食甜品',items:[{id:1,name:'薯条',count:12.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_501205_320.png"},
                                        {id:2,name:'鸡块',count:12.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901401_320.png"},
                                        {id:2,name:'鸡翅',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901700_320.png"},
                                        {id:2,name:'鸡翅',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901700_320.png"},
                                        {id:3,name:'鸡排',count:13,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_501208_320.png"},
                                        {id:4,name:'美味大鸡排',count:14.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901421_320.png"},
                                        {id:5,name:'香芋派',count:7.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904106_320.png"},
                                        {id:6,name:'菠萝派',count:7.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904105_320.png"},
                                        {id:6,name:'玉米杯',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904437_320.png"},
                                        {id:6,name:'蔬菜沙拉',count:14,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900515_320.png"},
                                        {id:6,name:'巧克力冰激凌',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_904410_320.png"}]},
            {basename:'饮品',items:[{id:1,name:'可口可乐',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903050_320.png"},
                                    {id:2,name:'雪碧',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903060_320.png"},
                                    {id:3,name:'纯牛奶',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903755_320.png"},
                                    {id:4,name:'橙汁',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_906352_320.png"},
                                    {id:5,name:'苹果汁',count:12,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_901027_320.png"},
                                    {id:6,name:'鲜煮咖啡',count:10,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903519_320.png"},
                                    {id:7,name:'热朱古力',count:13,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903605_320.png"},
                                    {id:8,name:'珍珠奶茶',count:15.5,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_900655_320.png"},
                                    {id:9,name:'纯净水',count:8,img:"https://menu-img.mcd.cn/pcm/prod/menu/20210421e/product/MS_903757_320.png"},]}]
export {bases};
export {lunches};
export {dinners};
