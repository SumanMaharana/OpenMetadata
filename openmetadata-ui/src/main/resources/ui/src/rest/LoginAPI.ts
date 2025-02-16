/*
 *  Copyright 2024 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import axiosClient from '.';

const BASE_URL = '/auth';

interface RenewTokenResponse {
  accessToken: string;
  refreshToken?: string;
  tokenType: string;
  // in seconds
  expiryDuration: number;
}

export const renewToken = async () => {
  const data = await axiosClient.get<RenewTokenResponse>(
    `${BASE_URL}/refresh`,
    // Need to invalidate other status codes
    // which help is user to force logout
    { validateStatus: (status) => status === 200 }
  );

  return data.data;
};

export const logoutUser = async () => {
  return await axiosClient.get(`${BASE_URL}/logout`);
};
