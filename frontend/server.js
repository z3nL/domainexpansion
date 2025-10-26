import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server running on ws://localhost:8080');

wss.on('connection', (ws) => {
  console.log('✅ Client connected!');

  ws.send(JSON.stringify({ 
    type: 'connected', 
    message: 'Welcome to the server!' 
  }));

  ws.on('message', (message) => {
    console.log('📨 Received:', message.toString());
    
    try {
      const data = JSON.parse(message.toString());
      
      if (data.type === 'createGame') {
        console.log('🎮 Creating game...');
        
        const gameId = Math.random().toString(36).substring(7);
        
        ws.send(JSON.stringify({
          type: 'gameCreated',
          gameId: gameId,
          message: 'Game created successfully!'
        }));
      }
    } catch (e) {
      console.error('❌ Error parsing message:', e);
    }
  });

  ws.on('close', () => {
    console.log('❌ Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('❌ WebSocket error:', error);
  });
});