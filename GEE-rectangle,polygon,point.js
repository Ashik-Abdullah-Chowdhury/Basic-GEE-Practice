// Draw a rectangle, a point, and a polygon in Google Earth Engine
var geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      }
    ] */
    ee.Geometry({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                89.07323145053637,
                25.00207881305216
              ],
              [
                89.07323145053637,
                24.613151260068598
              ],
              [
                89.95213770053637,
                24.613151260068598
              ],
              [
                89.95213770053637,
                25.00207881305216
              ]
            ]
          ],
          "geodesic": false,
          "evenOdd": true
        },
        {
          "type": "Point",
          "coordinates": [
            90.38060449741137,
            24.787820938695923
          ]
        }
      ],
      "coordinates": []
    }),
    geometry2 = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[90.80357813022387, 24.403225306446608],
          [91.28697656772387, 24.28311054108905],
          [91.53416895053637, 24.668073828083497],
          [91.03429102084887, 24.747918044254643]]]);
