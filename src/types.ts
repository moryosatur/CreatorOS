/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Screen = 'splash' | 'onboarding' | 'dashboard' | 'insights' | 'content' | 'ideas' | 'profile';

export interface Post {
  id: string;
  title: string;
  platform: 'youtube' | 'tiktok' | 'instagram';
  views: string;
  likes: string;
  trending: string;
  thumbnail: string;
  timestamp: string;
  duration?: string;
}

export interface Metric {
  label: string;
  value: string;
  trend: string;
  icon: string;
}
