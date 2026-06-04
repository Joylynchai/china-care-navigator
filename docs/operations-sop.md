# ChinaCare Navigator 运营 SOP v1.0

更新日期：2026-06-04

## 1. 运营原则

平台定位为非诊疗服务商，提供导医、翻译、预约、陪诊和行政文件支持。

核心原则：

1. 先收费，再深度投入；
2. 先文件，再预约；
3. 先低风险，再复杂病例；
4. AI 生成初稿，人工审核交付；
5. 医疗判断必须来自医疗机构或医生；
6. 医疗费与平台服务费分开；
7. 所有客户沟通都保留记录；
8. 高风险病例必须升级 L3 审核。

## 2. 角色分工

| 层级 | 角色 | 主要职责 | 禁止事项 |
| --- | --- | --- | --- |
| L1 | Case manager | 客户沟通、需求筛选、报价、预约、跟进 | 解释治疗方案、判断疗效 |
| L2 | 医学翻译/护士审核 | 翻译审核、资料结构化、缺失资料识别 | 诊断、处方、治疗建议 |
| L3 | 合作医生/医院端医生 | 复杂病例医学判断、二诊意见、接诊判断 | 私下收款、绕开医院流程 |
| BD | 医院/企业合作 | 签约、价格表、流程确认、投诉机制 | 承诺医生个人资源 |
| 陪诊译员 | 到院协助 | 注册、沟通、翻译、流程协助 | 独立解释医疗结论 |

## 3. 客户流程

### 3.1 线索进入

来源：

- 官网表单；
- WhatsApp/Telegram/微信；
- Google/Yandex/SEO；
- 企业/商会；
- 医院/保险/代理推荐；
- 韩国/俄语/海外华人社群。

L1 需在 12 小时内完成首次响应。

首次响应模板：

> Thank you for contacting ChinaCare Navigator. We provide non-medical coordination, translation, appointment, interpreter, and documentation support for healthcare access in China. We do not provide diagnosis or treatment advice. To understand whether we can help, please share your preferred language, China city, visit goal, timing, and available medical records.

### 3.2 初筛

判断维度：

- 是否属于平台可服务范围；
- 是否愿意支付服务费；
- 是否有明确城市和时间；
- 是否有病历资料；
- 是否存在高风险或拒接情形；
- 是否需要 L2/L3。

线索状态：

- New；
- Qualified；
- Needs documents；
- Paid consultation；
- File preparation；
- Hospital coordination；
- Visit scheduled；
- Visit completed；
- Closed won；
- Closed lost；
- Rejected。

### 3.3 付费节点

推荐节点：

1. 免费初筛：最多 10-15 分钟；
2. Basic Consultation：USD 29-99；
3. Medical File Pack：USD 199+；
4. Specialist Visit / Checkup Starter；
5. Interpreter / Full Visit Companion；
6. Post-visit Insurance Pack。

规则：

- 客户未支付 Basic Consultation 或 Medical File Pack 前，不做深度医院协调；
- 复杂病例必须先购买 Medical File Pack；
- 到院陪诊必须预付；
- 超时按小时或半天计费。

## 4. 病历处理 SOP

### 4.1 客户上传资料

可接收：

- PDF；
- 图片；
- 出院小结；
- 检验报告；
- 影像报告；
- DICOM 清单；
- 病理报告；
- 基因检测；
- 用药清单；
- 过敏史；
- 手术记录；
- 保险文件。

### 4.2 AI 初处理

AI 任务：

- OCR；
- 资料分类；
- 诊断名称提取；
- 日期线整理；
- 检查项目和结论提取；
- 用药信息提取；
- 关键缺失资料识别；
- 翻译初稿；
- 医院 intake pack 草稿。

### 4.3 人工审核

L2 审核清单：

- 患者姓名、年龄、性别是否一致；
- 诊断是否来自原始资料；
- 日期线是否清楚；
- 左右侧、剂量、单位、阴性/阳性是否准确；
- 影像结论是否完整；
- 病理是否完整；
- 用药和过敏史是否标注；
- 是否加入 AI 自行解释；
- 是否缺 DICOM、病理、出院小结、处方或费用明细；
- 是否应升级 L3。

### 4.4 输出文件

Medical File Pack 应包含：

- Case summary；
- Medical timeline；
- Diagnosis and treatment history；
- Medication list；
- Allergy history；
- Available documents list；
- Missing documents checklist；
- Questions for hospital；
- Translation notes；
- Disclaimer。

## 5. 医院协调 SOP

### 5.1 医院选择信息表

每家医院/机构需维护：

- 是否接收外籍护照；
- 接收科室；
- 是否有国际部；
- 语言支持；
- 预约周期；
- 支付方式；
- 价格表；
- 发票和英文费用明细；
- 报告语言；
- DICOM 获取方式；
- 是否允许第三方陪诊；
- 投诉和退款机制；
- 对接人。

### 5.2 预约前确认

发送医院前必须确认：

- 客户授权；
- 病历资料完整；
- 服务费支付；
- 医院费用预期；
- 客户入境时间；
- 是否需要签证/邀请函协助；
- 是否需要保险文件；
- 是否需要陪诊。

### 5.3 医院沟通边界

平台可以问：

- 是否接诊；
- 需要哪些资料；
- 预约时间；
- 费用预估；
- 报告和发票；
- 支付方式。

平台不能替客户问：

- 是否能治好；
- 成功率是多少；
- 是否一定安排某专家；
- 是否可以绕过医院流程；
- 是否可以使用未批准疗法。

## 6. 陪诊 SOP

### 6.1 出发前

陪诊员需确认：

- 客户姓名和护照；
- 医院、科室、地址；
- 预约时间；
- 交通路线；
- 病历资料；
- 支付方式；
- 服务时长；
- 紧急联系人；
- 禁止事项。

### 6.2 到院中

陪诊员可以：

- 协助注册；
- 协助缴费；
- 协助找科室；
- 口译医生和患者沟通；
- 协助取报告；
- 记录流程节点。

陪诊员不能：

- 独立解释诊疗结论；
- 替医生给建议；
- 修改医生意见；
- 承诺治疗结果；
- 私下收取医疗相关费用。

### 6.3 陪诊记录

每次到院后 24 小时内提交：

- 服务日期；
- 医院和科室；
- 服务时长；
- 医生/窗口沟通要点；
- 已收集文件；
- 未完成事项；
- 下次复诊时间；
- 客户问题；
- 风险提示。

## 7. 高风险病例规则

### 7.1 必须 L3 审核

- 肿瘤治疗；
- 罕见病；
- 神经系统疑难病；
- 心血管重大介入；
- 器官移植；
- ICU/重症；
- 儿童重大疾病；
- 多病共存；
- 客户要求判断治疗方案。

### 7.2 必须拒接

- 代孕；
- 非法辅助生殖；
- 未备案干细胞；
- 未批准基因治疗；
- 客户要求虚假病历或虚假发票；
- 客户要求保证疗效；
- 客户要求保证保险报销；
- 客户拒绝签署免责声明；
- 客户拒绝支付服务费但要求深度协调。

## 8. 保险文件 SOP

客户如需要保险文件，需先确认：

- 保险公司；
- 保单类型；
- 是否覆盖中国医疗；
- 是否覆盖体检/预防筛查；
- 是否需要 pre-authorization；
- 是否需要英文文件；
- 是否需要诊断码；
- 是否需要发票/fapiao；
- 是否需要费用明细。

保险文件包可包含：

- 医疗机构发票；
- 费用明细；
- 医生报告；
- 检查报告；
- 处方；
- DICOM；
- 出院小结；
- 英文摘要；
- 客户理赔清单。

标准声明：

> We can help organize claim-supporting documents, but reimbursement depends on your insurance policy and insurer review. We do not guarantee reimbursement.

## 9. 投诉和纠纷 SOP

### 9.1 分类

| 类型 | 处理人 | 时限 |
| --- | --- | --- |
| 翻译错误 | L2 | 24 小时内复核 |
| 预约变更 | L1/BD | 12 小时内响应 |
| 陪诊迟到/服务问题 | 运营负责人 | 24 小时内处理 |
| 医疗结果不满 | 医院处理，平台协助沟通 | 48 小时内转接 |
| 保险拒赔 | 文件复核，提醒非保证 | 48 小时内处理 |
| 重大投诉 | Founder/负责人 | 立即介入 |

### 9.2 退款规则

建议：

- Basic Consultation 完成后不退；
- Medical File Pack 按完成进度退款；
- 预约确认后协调费不全额退；
- 陪诊开始前 24 小时外可部分退；
- 陪诊当日取消收取最低服务费；
- 医院费用依据医院规则处理。

## 10. 数据安全

最低要求：

- 文件集中存储；
- 角色权限；
- 不用个人微信长期保存病历；
- 文件传输加密；
- 下载记录；
- 服务完成后归档；
- 客户可请求删除；
- 翻译和陪诊人员签保密协议。

## 11. 每周运营复盘

每周统计：

- 新线索；
- 有效咨询；
- 付费客户；
- 客单价；
- 渠道成本；
- 到院客户；
- 投诉；
- 退款；
- 平均响应时间；
- 每个 case manager 人效；
- 高风险病例数量。

## 12. 核心 KPI

| 阶段 | KPI |
| --- | --- |
| 30 天 | 50+ 有效咨询，10+ 付费，1-3 到院 |
| 90 天 | 100-200 有效咨询，20-40 付费，5-10 到院 |
| 12 月 | 100-200 单/月，毛利率 45%-60%，投诉/退款率 < 10% |
