'use client';

import { useEffect, useRef } from 'react';

interface Shape3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  rvx: number;
  rvy: number;
  rvz: number;
  radius: number;
  mass: number;
  type: 'sphere' | 'cube' | 'bracketLeft' | 'bracketRight' | 'react' | 'torus';
  color: string;
  glowColor: string;
  label?: string;
  isDragged?: boolean;
}

export default function Interactive3DSpace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    shapes: [] as Shape3D[],
    draggedShape: null as Shape3D | null,
    mouseX: 0,
    mouseY: 0,
    prevMouseX: 0,
    prevMouseY: 0,
    mouseVx: 0,
    mouseVy: 0,
    isMouseDown: false,
    scrollOffset: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const fov = 450;
    const dragDamping = 0.85;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initShapes = () => {
      const types: Shape3D['type'][] = ['sphere', 'cube', 'bracketLeft', 'bracketRight', 'react', 'torus'];
      const colors = ['#0ea5e9', '#a855f7', '#ec4899'];
      const glowColors = ['rgba(14, 165, 233, 0.4)', 'rgba(168, 85, 247, 0.4)', 'rgba(236, 72, 153, 0.4)'];
      const shapes: Shape3D[] = [];

      // Create a set of 12 zero-gravity drifting shapes
      for (let i = 0; i < 12; i++) {
        const type = types[i % types.length];
        const color = colors[i % colors.length];
        const glowColor = glowColors[i % glowColors.length];

        shapes.push({
          x: (Math.random() - 0.5) * 600,
          y: (Math.random() - 0.5) * 500,
          z: Math.random() * 200 - 100, // Z depth from -100 to 100
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          vz: (Math.random() - 0.5) * 0.4,
          rx: Math.random() * Math.PI,
          ry: Math.random() * Math.PI,
          rz: Math.random() * Math.PI,
          rvx: (Math.random() - 0.5) * 0.02,
          rvy: (Math.random() - 0.5) * 0.02,
          rvz: (Math.random() - 0.5) * 0.02,
          radius: 35 + Math.random() * 15,
          mass: 1,
          type,
          color,
          glowColor,
        });
      }

      stateRef.current.shapes = shapes;
    };

    const draw3DRect = (ctx: CanvasRenderingContext2D, size: number, rx: number, ry: number, rz: number, color: string) => {
      // Simple 3D Cube Projection vertices
      const d = size / 2;
      const vertices = [
        { x: -d, y: -d, z: -d },
        { x: d, y: -d, z: -d },
        { x: d, y: d, z: -d },
        { x: -d, y: d, z: -d },
        { x: -d, y: -d, z: d },
        { x: d, y: -d, z: d },
        { x: d, y: d, z: d },
        { x: -d, y: d, z: d },
      ];

      // Rotate vertices in 3D
      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      const cosZ = Math.cos(rz), sinZ = Math.sin(rz);

      const rotated = vertices.map((v) => {
        // Rotate X
        let y1 = v.y * cosX - v.z * sinX;
        let z1 = v.z * cosX + v.y * sinX;
        // Rotate Y
        let x2 = v.x * cosY + z1 * sinY;
        let z2 = z1 * cosY - v.x * sinY;
        // Rotate Z
        let x3 = x2 * cosZ - y1 * sinZ;
        let y3 = y1 * cosZ + x2 * sinZ;

        return { x: x3, y: y3, z: z2 };
      });

      const faces = [
        [0, 1, 2, 3], // Front
        [1, 5, 6, 2], // Right
        [5, 4, 7, 6], // Back
        [4, 0, 3, 7], // Left
        [4, 5, 1, 0], // Top
        [3, 2, 6, 7], // Bottom
      ];

      faces.forEach((face) => {
        ctx.beginPath();
        face.forEach((idx, i) => {
          const v = rotated[idx];
          if (i === 0) ctx.moveTo(v.x, v.y);
          else ctx.lineTo(v.x, v.y);
        });
        ctx.closePath();
        ctx.fillStyle = color + '15';
        ctx.fill();
        ctx.strokeStyle = color + 'bb';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    const drawReactIcon = (ctx: CanvasRenderingContext2D, radius: number, angle: number, color: string) => {
      ctx.rotate(angle);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      // Draw three intersecting ellipses
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, radius, radius * 0.35, (i * Math.PI) / 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Center sphere
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const drawTorus = (ctx: CanvasRenderingContext2D, r1: number, r2: number, rx: number, ry: number, color: string) => {
      ctx.save();
      ctx.rotate(rx);
      ctx.beginPath();
      ctx.arc(0, 0, r1, 0, Math.PI * 2);
      ctx.lineWidth = r2 * 2;
      ctx.strokeStyle = color + '22';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, r1, 0, Math.PI * 2);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.restore();
    };

    const render = () => {
      const { shapes, scrollOffset } = stateRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // 1. Physics: Collisions and zero gravity bounds
      shapes.forEach((s, idx) => {
        // Drag physics
        if (s.isDragged) {
          const scale = fov / (fov + s.z);
          s.x = (stateRef.current.mouseX - cx) / scale;
          s.y = (stateRef.current.mouseY - cy + scrollOffset * 0.3) / scale;

          s.vx = stateRef.current.mouseVx * dragDamping;
          s.vy = stateRef.current.mouseVy * dragDamping;
        } else {
          // Standard velocity update
          s.x += s.vx;
          s.y += s.vy;
          s.z += s.vz;

          s.rx += s.rvx;
          s.ry += s.rvy;
          s.rz += s.rvz;

          // Drag friction
          s.vx *= 0.99;
          s.vy *= 0.99;
          s.vz *= 0.99;

          // Elastic bounds (X, Y, Z coordinates in 3D space)
          const scale = fov / (fov + s.z);
          const limitX = cx / scale - s.radius;
          const limitY = cy / scale - s.radius;

          if (Math.abs(s.x) > limitX) {
            s.x = Math.sign(s.x) * limitX;
            s.vx *= -0.7;
          }
          if (Math.abs(s.y) > limitY) {
            s.y = Math.sign(s.y) * limitY;
            s.vy *= -0.7;
          }
          if (s.z < -200 || s.z > 200) {
            s.vz *= -0.7;
          }
        }

        // Elastic Shape-to-Shape collisions in 3D
        for (let j = idx + 1; j < shapes.length; j++) {
          const other = shapes[j];
          const dx = other.x - s.x;
          const dy = other.y - s.y;
          const dz = other.z - s.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const minDist = s.radius + other.radius;

          if (dist < minDist && dist > 0) {
            // Rebound physics
            const nx = dx / dist;
            const ny = dy / dist;
            const nz = dz / dist;

            const kx = s.vx - other.vx;
            const ky = s.vy - other.vy;
            const kz = s.vz - other.vz;
            const p = 2 * (nx * kx + ny * ky + nz * kz) / (s.mass + other.mass);

            s.vx -= p * other.mass * nx;
            s.vy -= p * other.mass * ny;
            s.vz -= p * other.mass * nz;

            other.vx += p * s.mass * nx;
            other.vy += p * s.mass * ny;
            other.vz += p * s.mass * nz;

            // Push apart slightly to prevent overlapping
            const overlap = minDist - dist;
            s.x -= nx * overlap * 0.5;
            s.y -= ny * overlap * 0.5;
            s.z -= nz * overlap * 0.5;
            other.x += nx * overlap * 0.5;
            other.y += ny * overlap * 0.5;
            other.z += nz * overlap * 0.5;
          }
        }
      });

      // Sort shapes by Z depth so we draw back-to-front (Painter's Algorithm)
      const sortedShapes = [...shapes].sort((a, b) => b.z - a.z);

      // 2. Draw Projected Shapes
      sortedShapes.forEach((s) => {
        // Perspective projection formula
        const scale = fov / (fov + s.z);
        // Integrate scroll offset into the Y projection to give layered parallax depth
        const projX = cx + s.x * scale;
        const projY = cy + (s.y * scale) - (scrollOffset * 0.18 * scale);
        const projRadius = s.radius * scale;

        // Skip rendering if offscreen
        if (projX < -projRadius || projX > width + projRadius || projY < -projRadius || projY > height + projRadius) {
          return;
        }

        ctx.save();
        ctx.translate(projX, projY);

        // Shadow glow
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.isDragged ? 30 : 15;

        // Draw shape style based on type
        switch (s.type) {
          case 'sphere': {
            const gradient = ctx.createRadialGradient(
              -projRadius * 0.25,
              -projRadius * 0.25,
              projRadius * 0.1,
              0,
              0,
              projRadius
            );
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(0.2, s.color);
            gradient.addColorStop(1, '#020617');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, projRadius, 0, Math.PI * 2);
            ctx.fill();
            break;
          }
          case 'cube':
            draw3DRect(ctx, projRadius * 1.5, s.rx, s.ry, s.rz, s.color);
            break;
          case 'react':
            drawReactIcon(ctx, projRadius * 1.1, s.rz, s.color);
            break;
          case 'torus':
            drawTorus(ctx, projRadius * 0.8, projRadius * 0.2, s.rx, s.ry, s.color);
            break;
          case 'bracketLeft':
          case 'bracketRight': {
            ctx.rotate(s.rz);
            ctx.fillStyle = s.color;
            ctx.font = `bold ${Math.round(projRadius * 1.8)}px Courier New`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(s.type === 'bracketLeft' ? '{' : '}', 0, 0);
            break;
          }
        }

        ctx.restore();
      });

      // Mouse drag logic
      if (stateRef.current.isMouseDown) {
        stateRef.current.mouseVx = stateRef.current.mouseX - stateRef.current.prevMouseX;
        stateRef.current.mouseVy = stateRef.current.mouseY - stateRef.current.prevMouseY;
        stateRef.current.prevMouseX = stateRef.current.mouseX;
        stateRef.current.prevMouseY = stateRef.current.mouseY;
      } else {
        stateRef.current.mouseVx *= 0.9;
        stateRef.current.mouseVy *= 0.9;
      }

      animationId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initShapes();
    render();

    // Scroll response
    const handleScroll = () => {
      stateRef.current.scrollOffset = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Drag handlers
    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      stateRef.current.mouseX = x;
      stateRef.current.mouseY = y;
      stateRef.current.prevMouseX = x;
      stateRef.current.prevMouseY = y;
      stateRef.current.isMouseDown = true;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Find if clicking near a projected shape (distance in 2D)
      let clickedShape: Shape3D | null = null;
      let minDistance = Infinity;

      stateRef.current.shapes.forEach((s) => {
        const scale = fov / (fov + s.z);
        const projX = cx + s.x * scale;
        const projY = cy + (s.y * scale) - (stateRef.current.scrollOffset * 0.18 * scale);
        const projRadius = s.radius * scale;

        const dx = x - projX;
        const dy = y - projY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < projRadius + 15 && dist < minDistance) {
          minDistance = dist;
          clickedShape = s;
        }
      });

      if (clickedShape) {
        stateRef.current.draggedShape = clickedShape;
        (clickedShape as Shape3D).isDragged = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      stateRef.current.mouseX = e.clientX - rect.left;
      stateRef.current.mouseY = e.clientY - rect.top;
    };

    const handleMouseUp = () => {
      stateRef.current.isMouseDown = false;
      if (stateRef.current.draggedShape) {
        stateRef.current.draggedShape.isDragged = false;
        stateRef.current.draggedShape = null;
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'auto',
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
}
