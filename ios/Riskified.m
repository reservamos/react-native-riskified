#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Riskified, NSObject)
RCT_EXTERN_METHOD(initRiskified:(NSString *)MerchantId userToken:(NSString *)userToken)
RCT_EXTERN_METHOD(logRequest:(NSString *)path)
RCT_EXTERN_METHOD(updateSessionToken:(NSString *)newToken)
@end
