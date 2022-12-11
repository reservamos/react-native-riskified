import Foundation

@objc(Riskified)
class Riskified: NSObject {
  
  @objc
  func initRiskified(_ MerchantId: String, userToken: String) {
    if(RiskifiedGlobalState.isInitialized) {
      return
    }
    
    RiskifiedBeacon.start(MerchantId, sessionToken: userToken, debugInfo: false)
    RiskifiedGlobalState.isInitialized = true
  }
  
  @objc
  func logRequest(_ path: String) {
    if(!RiskifiedGlobalState.isInitialized) {
      return
    }
    
    RiskifiedBeacon.logRequest(URL(string: path))
  }
  
  @objc
  func updateSessionToken(_ newToken: String) {
    if(!RiskifiedGlobalState.isInitialized) {
      return
    }
    
    RiskifiedBeacon.updateSessionToken(newToken)
  }
  
  @objc
   static func requiresMainQueueSetup() -> Bool {
     return true
   }
}
