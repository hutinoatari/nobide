# nobide

## class

### Vector3

3次元ベクトル

| 引数        | 説明  |
| --------- | --- |
| x: number | x座標 |
| y: number | y座標 |
| z: number | z座標 |

| プロパティ     | 説明  |
| --------- | --- |
| x: number | x座標 |
| y: number | y座標 |
| z: number | z座標 |

| メソッド                                           | 説明     |
| ---------------------------------------------- | ------ |
| add(vec: Vector3): Vector3                     | 加算     |
| sm(a: number): Vector3                         | スカラー倍  |
| dp(vec: Vector3): number                       | 内積     |
| cp(vec: Vector3): Vector3                      | 外積     |
| rotateX(center: Vector3, rad: number): Vector3 | X軸で回転  |
| rotateY(center: Vector3, rad: number): Vector3 | Y軸で回転  |
| rotateZ(center: Vector3, rad: number): Vector3 | Z軸で回転  |
| scale(center: Vector3, n: number): Vector3     | 拡大     |
| size(): number                                 | 大きさ    |
| distance(vec: Vector3): number                 | 2点間の距離 |
| normalize(): Vector3                           | 単位ベクトル |

### LineSegment

線分

| 引数          | 説明  |
| ----------- | --- |
| p1: Vector3 | 端点1 |
| p2: Vector3 | 端点2 |

| プロパティ       | 説明     |
| ----------- | ------ |
| p1: Vector3 | 端点1    |
| p2: Vector3 | 端点2    |
| z: Vector3  | 方向ベクトル |

| メソッド | 説明 |
| ---- | -- |
| なし   | なし |

### Triangle

3角形

| 引数          | 説明  |
| ----------- | --- |
| p1: Vector3 | 頂点1 |
| p2: Vector3 | 頂点2 |
| p3: Vector3 | 頂点3 |

| プロパティ       | 説明     |
| ----------- | ------ |
| p1: Vector3 | 頂点1    |
| p2: Vector3 | 頂点2    |
| p3: Vector3 | 頂点3    |
| n: Vector3  | 法線ベクトル |

| メソッド                                            | 説明    |
| ----------------------------------------------- | ----- |
| distance(point: Vector3): number                | 点との距離 |
| collide(line: LineSegment): Vector3 \| null     | 衝突する点 |
| rotateX(center: Vector3, rad: number): Triangle | X軸で回転 |
| rotateY(center: Vector3, rad: number): Triangle | Y軸で回転 |
| rotateZ(center: Vector3, rad: number): Triangle | Z軸で回転 |
| scale(center: Vector3, n: number): Triangle     | 拡大    |
