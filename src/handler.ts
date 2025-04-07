import { Handler } from 'aws-lambda';
import axios from 'axios';

export const execute: Handler = async (event, context) => {
  try {
    const targetUrl =
      process.env.TARGET_URL ||
      'https://discord.com/api/webhooks/1332235823223013416/AONcS6gBc29uixtV-UHJBO8FJWogAMHGxaQkhgtUhTIsr2CWdMr8WIG7iamqUqJqcNab';

    console.log(`요청 시작: ${targetUrl}`);

    const response = await axios({
      method: 'POST',
      url: targetUrl,
      data: {
        content: '웹훅 테스트',
        embeds: null,
        attachments: [],
      },
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });

    console.log('요청 성공:', response.status);

    // 단순히 실행 결과만 반환
    return {
      success: true,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error('요청 실패:', error);
    throw error; // 에러가 발생하면 Lambda가 실패로 처리
  }
};
