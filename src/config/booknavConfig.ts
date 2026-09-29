import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
// 提示：url 请用「干净的地址」，不要带 sid / token / 邮箱等私人参数
//       如果站点首页就能到，优先用首页地址
export const booknavConfig: BooknavGroup[] = [
	{
		id: "ai",
		name: "AI 助手",
		icon: "material-symbols:chat-outline-rounded",
		desc: "常用的对话与模型平台",
		weight: 100,
		items: [
			{
				title: "ChatGPT",
				url: "https://chatgpt.com/",
				desc: "OpenAI 的对话助手",
				weight: 10,
			},
			{
				title: "DeepSeek",
				url: "https://platform.deepseek.com/",
				desc: "DeepSeek 开放平台",
				weight: 9,
			},
			{
				title: "Grok",
				url: "https://grok.com/",
				desc: "xAI 的对话助手",
				weight: 8,
			},
			{
				title: "MiniMax",
				url: "https://platform.minimaxi.com/",
				desc: "MiniMax 开放平台",
				weight: 7,
			},
			{
				title: "DeepSider",
				url: "https://web.deepsider.online/chat/",
				desc: "网页版对话工具",
				weight: 6,
			},
			{
				title: "OfoxAI",
				url: "https://app.ofox.io/dashboard",
				desc: "AI 服务平台",
				weight: 5,
			},
			{
				title: "LLM Leaderboard",
				url: "https://arena.ai/leaderboard/text",
				desc: "大模型能力排行榜",
				weight: 4,
			},
		],
	},
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写代码会用到的",
		weight: 90,
		items: [
			{
				title: "GitHub",
				url: "https://github.com/",
				desc: "全球最大的代码托管平台",
				weight: 10,
			},
			{
				title: "Lean Web",
				url: "https://live.lean-lang.org/",
				desc: "Lean 定理证明器在线版",
				weight: 9,
			},
		],
	},
	{
		id: "study",
		name: "学习",
		icon: "material-symbols:school-outline-rounded",
		desc: "查资料、看论文",
		weight: 80,
		items: [
			{
				title: "arXiv",
				url: "https://arxiv.org/",
				desc: "预印本论文库",
				weight: 10,
			},
			{
				title: "维基百科",
				url: "https://zh.wikipedia.org/",
				desc: "自由的百科全书",
				weight: 9,
			},
			{
				title: "学习通",
				url: "https://i.chaoxing.com/",
				desc: "超星学习平台",
				weight: 8,
			},
		],
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的小工具",
		weight: 70,
		items: [
			{
				title: "百度",
				url: "https://www.baidu.com/",
				desc: "搜索引擎",
				weight: 10,
			},
			{
				title: "百度翻译",
				url: "https://fanyi.baidu.com/",
				desc: "在线翻译",
				weight: 9,
			},
			{
				title: "Convertio",
				url: "https://convertio.co/zh/",
				desc: "在线文件格式转换",
				weight: 8,
			},
			{
				title: "BPM 查找器",
				url: "https://bpm-finder.net/",
				desc: "分析音频每分钟节拍数",
				weight: 7,
			},
			{
				title: "反应速度测试",
				url: "https://reactiontimetest.net/zh",
				desc: "测一测反应有多快",
				weight: 6,
			},
			{
				title: "资源分享导航页",
				url: "https://www.kdocs.cn/l/cadvI245M625",
				desc: "在线文档汇总的资源导航",
				weight: 5,
			},
		],
	},
	{
		id: "acg",
		name: "二次元",
		icon: "material-symbols:palette-outline-rounded",
		desc: "看画、找游戏的去处",
		weight: 60,
		items: [
			{
				title: "Pixiv",
				url: "https://www.pixiv.net/",
				desc: "插画作品交流站",
				weight: 10,
			},
			{
				title: "TouchGal",
				url: "https://www.touchgal.top/galgame",
				desc: "Galgame 列表",
				weight: 9,
			},
			{
				title: "玄夜の资源小站",
				url: "https://www.sakuraxy.top/",
				desc: "软件、游戏与动漫推荐",
				weight: 8,
			},
			{
				title: "0721_Galgame",
				url: "https://nn0721.icu/",
				desc: "Galgame 资源",
				weight: 7,
			},
			{
				title: "米哈社",
				url: "http://23.225.187.246:3000/#/",
				desc: "米哈游相关社区",
				weight: 6,
			},
		],
	},
	{
		id: "social",
		name: "社交与邮箱",
		icon: "material-symbols:mail-outline-rounded",
		desc: "收发消息的地方",
		weight: 50,
		items: [
			{
				title: "Gmail",
				url: "https://mail.google.com/",
				desc: "谷歌邮箱",
				weight: 10,
			},
			{
				title: "网易邮箱",
				url: "https://mail.163.com/",
				desc: "163 邮箱",
				weight: 9,
			},
			{
				title: "X",
				url: "https://x.com/",
				desc: "社交平台",
				weight: 8,
			},
			{
				title: "TikTok",
				url: "https://www.tiktok.com/",
				desc: "短视频平台",
				weight: 7,
			},
		],
	},
];
