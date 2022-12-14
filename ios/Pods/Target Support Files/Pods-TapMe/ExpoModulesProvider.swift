/**
 * Automatically generated by expo-modules-autolinking.
 *
 * This autogenerated class provides a list of classes of native Expo modules,
 * but only these that are written in Swift and use the new API for creating Expo modules.
 */

import ExpoModulesCore
import ExpoCrypto
import EASClient
import ExpoKeepAwake
import EXUpdates
import ExpoWebBrowser

@objc(ExpoModulesProvider)
public class ExpoModulesProvider: ModulesProvider {
  public override func getModuleClasses() -> [AnyModule.Type] {
    return [
      CryptoModule.self,
      EASClientModule.self,
      KeepAwakeModule.self,
      WebBrowserModule.self
    ]
  }

  public override func getAppDelegateSubscribers() -> [ExpoAppDelegateSubscriber.Type] {
    return [
      ExpoUpdatesAppDelegateSubscriber.self
    ]
  }

  public override func getReactDelegateHandlers() -> [ExpoReactDelegateHandlerTupleType] {
    return [
      (packageName: "expo-updates", handler: ExpoUpdatesReactDelegateHandler.self)
    ]
  }
}
