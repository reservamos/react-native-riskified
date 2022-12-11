package com.riskified

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.riskified.android_sdk.RiskifiedBeaconMain
import com.riskified.android_sdk.RiskifiedBeaconMainInterface


class RiskifiedModule internal constructor(private val ReactContext: ReactApplicationContext) : ReactContextBaseJavaModule(ReactContext) {
  override fun getName(): String {
    return "Riskified"
  }

  @ReactMethod
  fun initRiskified(merchantId: String?, userToken: String?) {
    if (RXBeacon != null) return
    RXBeacon = RiskifiedBeaconMain()
    RXBeacon!!.startBeacon(merchantId, userToken, false, ReactContext.applicationContext)
    Log.d("Riskified", "Riskified Initialized")
  }

  @ReactMethod
  fun logRequest(path: String) {
    if (RXBeacon == null) return
    RXBeacon!!.logRequest(path)
    Log.d("Riskified", "New Event: $path")
  }

  @ReactMethod
  fun updateSessionToken(newToken: String?) {
    if (RXBeacon == null) return
    RXBeacon!!.updateSessionToken(newToken)
    Log.d("Riskified", "New Token setted")
  }

  companion object {
    private var RXBeacon: RiskifiedBeaconMainInterface? = null
  }
}
