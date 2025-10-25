import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export async function GET(): RequestHandler {
  return json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
}