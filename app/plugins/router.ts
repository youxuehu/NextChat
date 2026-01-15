export interface ModelProvider {
  name: string;
  model: string[];
}

/**
 *
 * @returns 模型供应商列表
 */
export async function modelProvider(): Promise<ModelProvider[]> {
  try {
    const response = await fetch("/api/channel/models", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP response.status:{await response.text()}`);
    }
    const r = await response.json();
    return r.meta.map((item: { name: string }) => item.name);
    // const data: ModelProvider[] = r.meta;
    // return data;
  } catch (error) {
    console.error("❌获取 模型供应商 失败:", error);
    throw new Error("❌获取 模型供应商 失败:" + error);
  }
}

/**
 *
 * @returns 模型供应商 可用模型列表
 */
export async function modelListByProvider(
  providerName: string,
): Promise<ModelProvider> {
  try {
    const response = await fetch("/api/user/available_models", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify({ providerName: providerName }),
    });

    if (!response.ok) {
      throw new Error(`HTTP response.status:{await response.text()}`);
    }
    const r = await response.json();
    return r.data;
    // const data: ModelProvider[] = r.meta;
    // return data;
  } catch (error) {
    console.error("❌获取 模型列表 失败:", error);
    throw new Error("❌获取 模型列表 失败:" + error);
  }
}

/**
 * tokens 调用量
 * @return
 */
export async function fetch_tokens(
  providerName: string,
): Promise<ModelProvider> {
  try {
    const response = await fetch("/api/user/dashboard", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify({ providerName: providerName }),
    });

    if (!response.ok) {
      throw new Error(`HTTP response.status:{await response.text()}`);
    }
    const r = await response.json();
    return r.data;
    // const data: ModelProvider[] = r.meta;
    // return data;
  } catch (error) {
    console.error("❌获取 模型列表 失败:", error);
    throw new Error("❌获取 模型列表 失败:" + error);
  }
}
