import Foundation
import Vision
import ImageIO
let target = "https://www.runatlantis.io/"
for path in CommandLine.arguments.dropFirst() {
    let request = VNDetectBarcodesRequest()
    request.symbologies = [.qr]
    try VNImageRequestHandler(url: URL(fileURLWithPath: path)).perform([request])
    let results = request.results?.compactMap { $0.payloadStringValue } ?? []
    guard results.contains(target) else { fatalError("QR decode failed: \(path)") }
    print("PASS QR: \(path) → \(target)")
}
