import { Handler } from 'aws-lambda';
import axios from 'axios';

export const execute: Handler = async (event, context) => {
  try {
    const targetUrl = process.env.DISCORD_WEBHOOK_URL;

    const response = await axios({
      method: 'POST',
      url: targetUrl,
      data: {
        content: '결계 5분전 알림',
        embeds: null,
        attachments: [],
      },
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });

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
