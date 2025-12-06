# Build Variants Summary

All build variants have been successfully configured and tested. Here's a complete overview:

## Build Variants

### Available Variants:
1. **devDebug** - Development Debug build
2. **devRelease** - Development Release build
3. **stagingDebug** - Staging Debug build
4. **stagingRelease** - Staging Release build
5. **prodDebug** - Production Debug build
6. **prodRelease** - Production Release build

## APK Locations

All APKs are located in: `android/app/build/outputs/apk/{flavor}/{buildType}/`

### Dev Variants:
- **Debug**: `android/app/build/outputs/apk/dev/debug/app-dev-debug.apk` (168 MB)
- **Release**: `android/app/build/outputs/apk/dev/release/app-dev-release.apk` (84 MB)

### Staging Variants:
- **Debug**: `android/app/build/outputs/apk/staging/debug/app-staging-debug.apk` (168 MB)
- **Release**: `android/app/build/outputs/apk/staging/release/app-staging-release.apk` (84 MB)

### Prod Variants:
- **Debug**: `android/app/build/outputs/apk/prod/debug/app-prod-debug.apk` (186 MB)
- **Release**: `android/app/build/outputs/apk/prod/release/app-prod-release.apk` (84 MB)

## Package Names

- **Dev**: `com.brainboxai.brainbox.debug`
- **Staging**: `com.brainboxai.brainbox.staging`
- **Prod**: `com.brainboxai.brainbox`

## App Names

- **Dev**: "Brainbox Debug"
- **Staging**: "Brainbox Staging"
- **Prod**: "Brainbox"

## NPM Scripts

All build scripts are available in `package.json`:

```bash
# Debug builds
npm run build-debug:android              # Build devDebug
npm run build-staging:android            # Build stagingDebug
npm run build-release:android            # Build prodDebug

# Release builds
npm run build-debug-release:android      # Build devRelease
npm run build-staging-release:android    # Build stagingRelease
npm run build-release-release:android    # Build prodRelease
```

## Direct Gradle Commands

```bash
cd android

# Debug builds
./gradlew assembleDevDebug
./gradlew assembleStagingDebug
./gradlew assembleProdDebug

# Release builds
./gradlew assembleDevRelease
./gradlew assembleStagingRelease
./gradlew assembleProdRelease

# Build all variants
./gradlew assemble
```

## Notes

1. **Google Services**: Only enabled for `prod` variants. Dev and staging variants skip Google Services processing.

2. **Signing**: 
   - Debug builds use debug keystore
   - Release builds currently use debug keystore (⚠️ **CHANGE THIS FOR PRODUCTION**)

3. **Installation**: All variants can be installed side-by-side on the same device due to different package names.

4. **APK Sizes**: 
   - Debug builds are larger (~168-186 MB) due to debug symbols
   - Release builds are optimized (~84 MB)

## Verification

✅ All 6 build variants build successfully
✅ All APKs are generated in correct locations
✅ Package names are correctly configured
✅ App names are correctly set per variant
✅ Google Services only processes for prod variant

