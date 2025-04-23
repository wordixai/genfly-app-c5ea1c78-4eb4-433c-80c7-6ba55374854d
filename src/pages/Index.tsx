import { Star, HelpCircle, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-md mx-auto bg-white pb-8">
      {/* App Header */}
      <div className="p-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=100&h=100&auto=format&fit=crop" alt="WeChat Logo" className="w-16 h-16 rounded-xl" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold">爱聊-原陌生交友</h1>
            <p className="text-sm text-gray-500">想脱单，上爱聊</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">免费安装</button>
          </div>
          <div>
            <HelpCircle className="text-blue-500" size={24} />
          </div>
        </div>
      </div>

      {/* App Stats */}
      <div className="flex border-t border-b border-gray-200">
        <div className="flex-1 py-2 text-center border-r border-gray-200">
          <div className="text-sm text-gray-500">4.4万个评分</div>
          <div className="flex items-center justify-center mt-1">
            <span className="text-lg font-semibold">3.7</span>
            <div className="flex ml-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={12} 
                  className={star <= 3 ? "text-gray-400 fill-gray-400" : "text-gray-300"} 
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 py-2 text-center border-r border-gray-200">
          <div className="text-sm text-gray-500">年龄</div>
          <div className="text-lg font-semibold">17+</div>
          <div className="text-xs text-gray-400">岁</div>
        </div>
        <div className="flex-1 py-2 text-center">
          <div className="text-sm text-gray-500">排行榜</div>
          <div className="text-lg font-semibold">#5</div>
          <div className="text-xs text-gray-400">社交</div>
        </div>
      </div>

      {/* App Screenshots */}
      <div className="flex overflow-x-auto py-4 px-2 space-x-3">
        <div className="flex-shrink-0 w-32 rounded-xl overflow-hidden">
          <div className="bg-purple-600 text-white p-2 text-xs">
            享受新的打击感!
          </div>
          <img 
            src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=200&auto=format&fit=crop" 
            alt="App Screenshot 1" 
            className="w-full h-48 object-cover" 
          />
        </div>
        <div className="flex-shrink-0 w-32 rounded-xl overflow-hidden">
          <div className="bg-red-500 text-white p-2 text-xs">
            选择你喜欢的风格
          </div>
          <img 
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=200&auto=format&fit=crop" 
            alt="App Screenshot 2" 
            className="w-full h-48 object-cover" 
          />
        </div>
        <div className="flex-shrink-0 w-32 rounded-xl overflow-hidden">
          <div className="bg-orange-500 text-white p-2 text-xs">
            最新功能
          </div>
          <img 
            src="https://images.unsplash.com/photo-1611162618479-ee4a1f8d5be9?q=80&w=200&auto=format&fit=crop" 
            alt="App Screenshot 3" 
            className="w-full h-48 object-cover" 
          />
        </div>
      </div>

      {/* App Description */}
      <div className="px-4">
        <h2 className="text-xl font-bold mb-2">简介</h2>
        <p className="text-sm text-gray-700 mb-4">
          你在寻找这的节拍制作机器吗？不要再找了，请选择 Beat Maker Pro。
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Beat Maker Pro经过有指导的节拍制作课程提供最高级的节奏制作能力，无论是初学者还是正在寻找音乐家。它能让你知道一些的节拍制作适合每一个人！
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Beat Maker Pro是理想的音乐软件，它将指导你在节拍的道路上。
        </p>
      </div>

      {/* App Rating */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">4.8</h2>
          <div className="text-xs text-gray-500">满分5分</div>
        </div>
        <div className="mt-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center mb-1">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={12} 
                    className={star <= rating ? "text-gray-400 fill-gray-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-400" 
                  style={{ width: rating === 5 ? '70%' : rating === 4 ? '20%' : '5%' }} 
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-right text-xs text-gray-500 mt-1">30K个评分</div>
      </div>

      {/* User Reviews */}
      <div className="px-4 mt-6">
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={12} className="text-gray-400 fill-gray-400" />
              ))}
            </div>
            <div className="ml-2 text-sm font-medium">喜欢里面的主播</div>
            <div className="ml-auto text-xs text-gray-500">1天前</div>
          </div>
          <p className="text-sm text-gray-700">
            我关注很多！可能大大有别于其他人的动机或者目的，多多观察，多多学习，多多交流。多多交流人在此很多！希望人人时间！
          </p>
        </div>

        <div>
          <div className="flex items-center mb-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={12} className="text-gray-400 fill-gray-400" />
              ))}
            </div>
            <div className="ml-2 text-sm font-medium">非常实用</div>
            <div className="ml-auto text-xs text-gray-500">非常实用</div>
          </div>
          <p className="text-sm text-gray-700">
            这个真棒！很有才华，很好玩！...
          </p>
        </div>
      </div>

      {/* App Privacy */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold mb-3">APP隐私</h2>
        <p className="text-sm text-gray-700 mb-4">
          开发者表明此 App 的隐私规范可能包括下下述的数据处理方式。
        </p>
        
        <div className="flex items-center justify-center border rounded-lg p-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-medium">未收集数据</h3>
            <p className="text-sm text-gray-500">开发者不会从此 App 中收集任何数据。</p>
          </div>
        </div>
      </div>

      {/* App Information */}
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold mb-3">信息</h2>
        
        <div className="border-t border-gray-200 py-3 flex justify-between">
          <div className="text-sm">大小</div>
          <div className="text-sm text-gray-500">60.2M</div>
        </div>
        
        <div className="border-t border-gray-200 py-3 flex justify-between">
          <div className="text-sm">类别</div>
          <div className="text-sm text-gray-500">娱乐</div>
        </div>
        
        <div className="border-t border-gray-200 py-3 flex justify-between">
          <div className="text-sm">兼容性</div>
          <div className="text-sm text-gray-500 text-right">
            Android系统和iOS 8.0或更高系统。与iPhone, iPad和iPod Touch兼容
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-3 flex justify-between">
          <div className="text-sm">语言</div>
          <div className="text-sm text-gray-500">简体中文，繁体中文，英文</div>
        </div>
        
        <div className="border-t border-gray-200 py-3 flex justify-between">
          <div className="text-sm">年龄分级</div>
          <div className="text-sm text-gray-500">限18岁以上</div>
        </div>
        
        <div className="border-t border-gray-200 py-3 flex justify-between">
          <div className="text-sm">Copyright</div>
          <div className="text-sm text-gray-500">©2023Mobile Games Inc</div>
        </div>
        
        <div className="border-t border-gray-200 py-3 flex justify-between">
          <div className="text-sm">价格</div>
          <div className="text-sm text-gray-500">免费</div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-4 mt-6 bg-gray-100 py-4">
        <p className="text-xs text-gray-500">
          免责声明：程序仅供娱乐交流测试，请勿用于非法用途，这里的简介可以根据自需求进行修改。
        </p>
      </div>
    </div>
  );
};

export default Index;