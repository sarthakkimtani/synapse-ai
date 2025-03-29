# Synapse AI

Synapse AI is a modern web platform leveraging AI to transform language learning through interactive exercises, flashcards, role-play conversations, and writing assistance.

## 🌟 Features

- **Conversational AI**: Practice language skills through natural conversations
- **Flashcards**: Study vocabulary and phrases with AI-generated flashcards
- **Role-Play**: Chat with different characters to practice conversational skills
- **Writing Review**: Get AI-powered grammar and style suggestions for your writing
- **Multi-language Support**: Learn over 40+ languages
- **Free to Use**: All features available at no cost

## 🚀 Technologies

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS, Motion (previously Framer Motion) for animations
- **AI Integration**: Google AI SDK, AI SDK
- **Authentication**: Supabase
- **Rate Limiting**: Upstash Redis

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or bun

## 🛠️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/sarthakkimtani/synapse-ai.git
   cd synapse-ai
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GOOGLE_API_KEY=your_google_api_key
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

4. Run the development server:

   ```bash
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
synapse-ai/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── exercise/         # Exercise pages
│   └── writing/          # Writing review page
├── assets/               # Static assets and SVGs
├── components/           # React components
├── lib/                  # Utility libraries
├── public/               # Public assets
├── utils/                # Utility functions
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
