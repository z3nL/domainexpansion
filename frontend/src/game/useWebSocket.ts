import { useEffect, useRef, useState } from "react";
import type { IMatchPayload } from "../matchPayload";

interface UseWebSocketProps {
  url: string;
  onMessage?: (data: any) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onError?: (error: Event) => void;
}

export function useWebSocket({
  url,
  onMessage,
  onOpen,
  onClose,
  onError,
}: UseWebSocketProps) {
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
      setIsConnected(true);
      onOpen?.();
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onMessage?.(data);
      } catch (e) {
        console.error("Failed to parse message:", e);
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
      setIsConnected(false);
      onClose?.();
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
      onError?.(error);
    };

    return () => {
      ws.current?.close();
    };
  }, [url]);

  const sendMessage = (data: IMatchPayload) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(data));
    } else {
      console.error("WebSocket is not connected");
    }
  };

  return { isConnected, sendMessage };
}
