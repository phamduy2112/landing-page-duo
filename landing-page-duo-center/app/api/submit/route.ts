import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const payload = {
      fullName: body.fullName || '',
      phone: body.phone || '',
      detGoal: body.detGoal || '',
      message: body.message || '',
      token: process.env.GOOGLE_SCRIPT_TOKEN,
    };

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = { success: false, message: text };
    }

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || 'Không thể lưu dữ liệu vào Google Sheet',
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Đăng ký thành công',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Lỗi server khi gửi form',
        error: String(error),
      },
      { status: 500 }
    );
  }
}