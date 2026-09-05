# BYBIT 赚钱应用

[中文](#中文) | [English](#english) | [ไทย](#ไทย)

---

## 中文

### 项目简介
BYBIT 是一个赚钱应用，用户可以通过完成代收和代付任务赚取佣金。

### 核心功能
- **代收任务**：完成代收任务，赚取佣金
- **代付任务**：完成代付任务，赚取佣金
- **佣金体系**：
  - 一级佣金：1.8%（可提现）
  - 二级佣金：1.6%（仅显示）
  - 三级佣金：1.4%（仅显示）
- **AI 客服**：智能客服助手，解答用户问题
- **收益排行榜**：展示用户收益排名
- **佣金通知**：实时佣金到账通知

### 技术栈
- **前端**：Next.js 16 + React 19 + TypeScript
- **样式**：Tailwind CSS 4
- **AI 服务**：NVIDIA API (z-ai/glm5)
- **部署**：Vercel

### 文件结构
```
src/
├── app/
│   ├── page.tsx              # 主页面
│   ├── layout.tsx            # 布局组件
│   ├── globals.css           # 全局样式
│   └── api/
│       └── chat/
│           └── route.ts      # AI 客服 API
├── components/
│   ├── ChatWidget.tsx        # 聊天组件
│   ├── CommissionNotification.tsx  # 佣金通知
│   └── TriangleBackground.tsx      # 背景动画
└── hooks/
    └── useSecurity.ts        # 安全防护
```

### 部署说明
1. 克隆仓库到本地
2. 安装依赖：`pnpm install`
3. 配置环境变量（见下方）
4. 运行开发服务器：`pnpm dev`
5. 构建生产版本：`pnpm build`
6. 启动生产服务器：`pnpm start`

### 下载链接
APK 下载地址：https://d1lpd5tr8ui3gv.cloudfront.net/web/bybit/bybit.apk

### 环境变量
- `NVIDIA_API_KEY`：NVIDIA API 密钥
- `NVIDIA_API_URL`：NVIDIA API 地址
- `COZE_PROJECT_DOMAIN_DEFAULT`：项目域名

### 重要提示
- 下载按钮有频率限制（每小时最多3次，每次间隔10秒）
- 页面包含安全防护（禁用 F12、右键菜单等）
- 所有界面语言为泰国语

---

## English

### Project Overview
BYBIT is a money-earning app where users can earn commissions by completing collection and payment tasks.

### Core Features
- **Collection Tasks**: Complete collection tasks to earn commissions
- **Payment Tasks**: Complete payment tasks to earn commissions
- **Commission System**:
  - Level 1 Commission: 1.8% (withdrawable)
  - Level 2 Commission: 1.6% (display only)
  - Level 3 Commission: 1.4% (display only)
- **AI Customer Service**: Intelligent assistant to answer user questions
- **Earnings Leaderboard**: Display user earnings rankings
- **Commission Notifications**: Real-time commission arrival notifications

### Tech Stack
- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **AI Service**: NVIDIA API (z-ai/glm5)
- **Deployment**: Vercel

### File Structure
```
src/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Layout component
│   ├── globals.css           # Global styles
│   └── api/
│       └── chat/
│           └── route.ts      # AI chat API
├── components/
│   ├── ChatWidget.tsx        # Chat widget
│   ├── CommissionNotification.tsx  # Commission notification
│   └── TriangleBackground.tsx      # Background animation
└── hooks/
    └── useSecurity.ts        # Security protection
```

### Deployment Instructions
1. Clone the repository
2. Install dependencies: `pnpm install`
3. Configure environment variables (see below)
4. Run development server: `pnpm dev`
5. Build production version: `pnpm build`
6. Start production server: `pnpm start`

### Download Link
APK Download: https://d1lpd5tr8ui3gv.cloudfront.net/web/bybit/bybit.apk

### Environment Variables
- `NVIDIA_API_KEY`: NVIDIA API key
- `NVIDIA_API_URL`: NVIDIA API endpoint
- `COZE_PROJECT_DOMAIN_DEFAULT`: Project domain

### Important Notes
- Download button has rate limiting (max 3 times per hour, 10-second interval)
- Page includes security protection (disable F12, right-click menu, etc.)
- All interface languages are Thai

---

## ไทย

### ภาพรวมโปรเจกต์
BYBIT เป็นแอปพลิเคชันสร้างรายได้ที่ผู้ใช้สามารถรับค่าคอมมิชชั่นจากการทำภารกิจรับและจ่ายเงิน

### ฟีเจอร์หลัก
- **ภารกิจรับเงิน**: ทำภารกิจรับเงินเพื่อรับค่าคอมมิชชั่น
- **ภารกิจจ่ายเงิน**: ทำภารกิจจ่ายเงินเพื่อรับค่าคอมมิชชั่น
- **ระบบค่าคอมมิชชั่น**:
  - ค่าคอมมิชชั่นระดับ 1: 1.8% (ถอนได้)
  - ค่าคอมมิชชั่นระดับ 2: 1.6% (แสดงเท่านั้น)
  - ค่าคอมมิชชั่นระดับ 3: 1.4% (แสดงเท่านั้น)
- **บริการลูกค้า AI**: ผู้ช่วยอัจฉริยะตอบคำถามผู้ใช้
- **กระดานผู้นำรายได้**: แสดงอันดับรายได้ของผู้ใช้
- **การแจ้งเตือนค่าคอมมิชชั่น**: แจ้งเตือนค่าคอมมิชชั่นแบบเรียลไทม์

### เทคโนโลยีที่ใช้
- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **AI Service**: NVIDIA API (z-ai/glm5)
- **Deployment**: Vercel

### โครงสร้างไฟล์
```
src/
├── app/
│   ├── page.tsx              # หน้าหลัก
│   ├── layout.tsx            # คอมโพเนนต์เลย์เอาต์
│   ├── globals.css           # สไตล์ทั่วโลก
│   └── api/
│       └── chat/
│           └── route.ts      # API แชท AI
├── components/
│   ├── ChatWidget.tsx        # วิดเจ็ตแชท
│   ├── CommissionNotification.tsx  # การแจ้งเตือนค่าคอมมิชชั่น
│   └── TriangleBackground.tsx      # แอนิเมชันพื้นหลัง
└── hooks/
    └── useSecurity.ts        # การป้องกันความปลอดภัย
```

### คำแนะนำการปรับใช้
1. โคลนที่เก็บข้อมูล
2. ติดตั้ง dependencies: `pnpm install`
3. กำหนดค่าตัวแปรสภาพแวดล้อม (ดูด้านล่าง)
4. เรียกใช้เซิร์ฟเวอร์พัฒนา: `pnpm dev`
5. สร้างเวอร์ชันการผลิต: `pnpm build`
6. เริ่มเซิร์ฟเวอร์การผลิต: `pnpm start`

### ลิงก์ดาวน์โหลด
ดาวน์โหลด APK: https://d1lpd5tr8ui3gv.cloudfront.net/web/bybit/bybit.apk

### ตัวแปรสภาพแวดล้อม
- `NVIDIA_API_KEY`: คีย์ API ของ NVIDIA
- `NVIDIA_API_URL`: จุดสิ้นสุด API ของ NVIDIA
- `COZE_PROJECT_DOMAIN_DEFAULT`: โดเมนโปรเจกต์

### หมายเหตุสำคัญ
- ปุ่มดาวน์โหลดมีการจำกัดอัตรา (สูงสุด 3 ครั้งต่อชั่วโมง ช่วงเวลา 10 วินาที)
- หน้ามีการป้องกันความปลอดภัย (ปิดใช้งาน F12, เมนูคลิกขวา ฯลฯ)
- ภาษาอินเทอร์เฟซทั้งหมดเป็นภาษาไทย
