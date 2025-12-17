# Interactive Cubic Bézier Curve with Spring Physics
1. Bézier Curve Math
* *P0, P3* – fixed 
* *P1, P2* – dynamic

equation:
B(t) = (1−t)³P0 + 3(1−t)²tP1 + 3(1−t)t²P2 + t³P3

## 2. Tangent Computation

B'(t) = 3(1−t)²(P1−P0)+ 6(1−t)t(P2−P1)+ 3t²(P3−P2)

## 3. Spring–Damping Physics Model
acceleration = -k * (position − target) − damping * velocity
for every  frame:

* Displacement from target is calculated
* Acceleration is calculated using spring force and damping
* Vel is updated
* Pos is updated

## 4. Interaction Design
* Mouse movement  for P1 and P2
* Endpoints are fixed
*maintain **~60 FPS**.

## 5. Rendering Pipeline

Each frame :

1. Physics update
2. Curve sampling using Bézier math
3. Tangent calc
4. Rendering

## 6. Design Choices

direcct treprestation of equations
spring physics



