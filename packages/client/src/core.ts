/* eslint-disable */
// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "auth.me", input: never, result: { id: string; email: string } } | 
        { key: "backups.getAll", input: never, result: GetAll } | 
        { key: "buildInfo", input: never, result: BuildInfo } | 
        { key: "files.get", input: LibraryArgs<GetArgs>, result: { id: number; pub_id: number[]; kind: number | null; key_id: number | null; hidden: boolean | null; favorite: boolean | null; important: boolean | null; note: string | null; date_created: string | null; date_accessed: string | null; file_paths: FilePath[] } | null } | 
        { key: "files.getConvertableImageExtensions", input: never, result: string[] } | 
        { key: "files.getEphemeralMediaData", input: string, result: MediaMetadata | null } | 
        { key: "files.getMediaData", input: LibraryArgs<number>, result: MediaMetadata } | 
        { key: "files.getPath", input: LibraryArgs<number>, result: string | null } | 
        { key: "invalidation.test-invalidate", input: never, result: number } | 
        { key: "jobs.isActive", input: LibraryArgs<null>, result: boolean } | 
        { key: "jobs.reports", input: LibraryArgs<null>, result: JobGroup[] } | 
        { key: "library.list", input: never, result: LibraryConfigWrapped[] } | 
        { key: "library.statistics", input: LibraryArgs<null>, result: Statistics } | 
        { key: "locations.get", input: LibraryArgs<number>, result: Location | null } | 
        { key: "locations.getWithRules", input: LibraryArgs<number>, result: LocationWithIndexerRules | null } | 
        { key: "locations.indexer_rules.get", input: LibraryArgs<number>, result: IndexerRule } | 
        { key: "locations.indexer_rules.list", input: LibraryArgs<null>, result: IndexerRule[] } | 
        { key: "locations.indexer_rules.listForLocation", input: LibraryArgs<number>, result: IndexerRule[] } | 
        { key: "locations.list", input: LibraryArgs<null>, result: Location[] } | 
        { key: "locations.systemLocations", input: never, result: SystemLocations } | 
        { key: "nodeState", input: never, result: NodeState } | 
        { key: "nodes.listLocations", input: LibraryArgs<string | null>, result: ExplorerItem[] } | 
        { key: "notifications.dismiss", input: NotificationId, result: null } | 
        { key: "notifications.dismissAll", input: never, result: null } | 
        { key: "notifications.get", input: never, result: Notification[] } | 
        { key: "p2p.nlmState", input: never, result: { [key: string]: LibraryData } } | 
        { key: "preferences.get", input: LibraryArgs<null>, result: LibraryPreferences } | 
        { key: "search.ephemeralPaths", input: LibraryArgs<EphemeralPathSearchArgs>, result: NonIndexedFileSystemEntries } | 
        { key: "search.objects", input: LibraryArgs<ObjectSearchArgs>, result: SearchData<ExplorerItem> } | 
        { key: "search.objectsCount", input: LibraryArgs<{ filter?: SearchFilterArgs[] }>, result: number } | 
        { key: "search.paths", input: LibraryArgs<FilePathSearchArgs>, result: SearchData<ExplorerItem> } | 
        { key: "search.pathsCount", input: LibraryArgs<{ filter?: SearchFilterArgs }>, result: number } | 
        { key: "search.saved.get", input: LibraryArgs<number>, result: SavedSearch | null } | 
        { key: "search.saved.list", input: LibraryArgs<null>, result: SavedSearchResponse[] } | 
        { key: "sync.messages", input: LibraryArgs<null>, result: CRDTOperation[] } | 
        { key: "tags.get", input: LibraryArgs<number>, result: Tag | null } | 
        { key: "tags.getForObject", input: LibraryArgs<number>, result: Tag[] } | 
        { key: "tags.getWithObjects", input: LibraryArgs<number[]>, result: { [key: number]: number[] } } | 
        { key: "tags.list", input: LibraryArgs<null>, result: Tag[] } | 
        { key: "volumes.list", input: never, result: Volume[] },
    mutations: 
        { key: "api.sendFeedback", input: Feedback, result: null } | 
        { key: "auth.logout", input: never, result: null } | 
        { key: "backups.backup", input: LibraryArgs<null>, result: string } | 
        { key: "backups.delete", input: string, result: null } | 
        { key: "backups.restore", input: string, result: null } | 
        { key: "files.convertImage", input: LibraryArgs<ConvertImageArgs>, result: null } | 
        { key: "files.copyFiles", input: LibraryArgs<FileCopierJobInit>, result: null } | 
        { key: "files.createEphemeralFolder", input: LibraryArgs<CreateEphemeralFolderArgs>, result: string } | 
        { key: "files.createFolder", input: LibraryArgs<CreateFolderArgs>, result: string } | 
        { key: "files.cutFiles", input: LibraryArgs<FileCutterJobInit>, result: null } | 
        { key: "files.deleteFiles", input: LibraryArgs<FileDeleterJobInit>, result: null } | 
        { key: "files.duplicateFiles", input: LibraryArgs<FileCopierJobInit>, result: null } | 
        { key: "files.eraseFiles", input: LibraryArgs<FileEraserJobInit>, result: null } | 
        { key: "files.removeAccessTime", input: LibraryArgs<number[]>, result: null } | 
        { key: "files.renameFile", input: LibraryArgs<RenameFileArgs>, result: null } | 
        { key: "files.setFavorite", input: LibraryArgs<SetFavoriteArgs>, result: null } | 
        { key: "files.setNote", input: LibraryArgs<SetNoteArgs>, result: null } | 
        { key: "files.updateAccessTime", input: LibraryArgs<number[]>, result: null } | 
        { key: "invalidation.test-invalidate-mutation", input: LibraryArgs<null>, result: null } | 
        { key: "jobs.cancel", input: LibraryArgs<string>, result: null } | 
        { key: "jobs.clear", input: LibraryArgs<string>, result: null } | 
        { key: "jobs.clearAll", input: LibraryArgs<null>, result: null } | 
        { key: "jobs.generateThumbsForLocation", input: LibraryArgs<GenerateThumbsForLocationArgs>, result: null } | 
        { key: "jobs.identifyUniqueFiles", input: LibraryArgs<IdentifyUniqueFilesArgs>, result: null } | 
        { key: "jobs.objectValidator", input: LibraryArgs<ObjectValidatorArgs>, result: null } | 
        { key: "jobs.pause", input: LibraryArgs<string>, result: null } | 
        { key: "jobs.resume", input: LibraryArgs<string>, result: null } | 
        { key: "library.create", input: CreateLibraryArgs, result: LibraryConfigWrapped } | 
        { key: "library.delete", input: string, result: null } | 
        { key: "library.edit", input: EditLibraryArgs, result: null } | 
        { key: "locations.addLibrary", input: LibraryArgs<LocationCreateArgs>, result: number | null } | 
        { key: "locations.create", input: LibraryArgs<LocationCreateArgs>, result: number | null } | 
        { key: "locations.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.fullRescan", input: LibraryArgs<FullRescanArgs>, result: null } | 
        { key: "locations.indexer_rules.create", input: LibraryArgs<IndexerRuleCreateArgs>, result: null } | 
        { key: "locations.indexer_rules.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.relink", input: LibraryArgs<string>, result: number } | 
        { key: "locations.subPathRescan", input: LibraryArgs<RescanArgs>, result: null } | 
        { key: "locations.update", input: LibraryArgs<LocationUpdateArgs>, result: null } | 
        { key: "nodes.edit", input: ChangeNodeNameArgs, result: null } | 
        { key: "notifications.test", input: never, result: null } | 
        { key: "notifications.testLibrary", input: LibraryArgs<null>, result: null } | 
        { key: "p2p.acceptSpacedrop", input: [string, string | null], result: null } | 
        { key: "p2p.cancelSpacedrop", input: string, result: null } | 
        { key: "p2p.pair", input: PeerId, result: number } | 
        { key: "p2p.pairingResponse", input: [number, PairingDecision], result: null } | 
        { key: "p2p.spacedrop", input: SpacedropArgs, result: string } | 
        { key: "preferences.update", input: LibraryArgs<LibraryPreferences>, result: null } | 
        { key: "search.saved.create", input: LibraryArgs<SavedSearchCreateArgs>, result: null } | 
        { key: "search.saved.delete", input: LibraryArgs<number>, result: null } | 
        { key: "search.saved.update", input: LibraryArgs<SavedSearchUpdateArgs>, result: null } | 
        { key: "tags.assign", input: LibraryArgs<TagAssignArgs>, result: null } | 
        { key: "tags.create", input: LibraryArgs<TagCreateArgs>, result: Tag } | 
        { key: "tags.delete", input: LibraryArgs<number>, result: null } | 
        { key: "tags.update", input: LibraryArgs<TagUpdateArgs>, result: null } | 
        { key: "toggleFeatureFlag", input: BackendFeature, result: null },
    subscriptions: 
        { key: "auth.loginSession", input: never, result: Response } | 
        { key: "invalidation.listen", input: never, result: InvalidateOperationEvent[] } | 
        { key: "jobs.newThumbnail", input: LibraryArgs<null>, result: string[] } | 
        { key: "jobs.progress", input: LibraryArgs<null>, result: JobProgressEvent } | 
        { key: "locations.online", input: never, result: number[][] } | 
        { key: "locations.quickRescan", input: LibraryArgs<LightScanArgs>, result: null } | 
        { key: "notifications.listen", input: never, result: Notification } | 
        { key: "p2p.events", input: never, result: P2PEvent } | 
        { key: "sync.newMessage", input: LibraryArgs<null>, result: null }
};

export type AudioMetadata = { duration: number | null; audio_codec: string | null }

/**
 * All of the feature flags provided by the core itself. The frontend has it's own set of feature flags!
 * 
 * If you want a variant of this to show up on the frontend it must be added to `backendFeatures` in `useFeatureFlag.tsx`
 */
export type BackendFeature = "syncEmitMessages" | "filesOverP2P"

export type Backup = ({ id: string; timestamp: string; library_id: string; library_name: string }) & { path: string }

export type BuildInfo = { version: string; commit: string }

export type CRDTOperation = { instance: string; timestamp: number; id: string; typ: CRDTOperationType }

export type CRDTOperationType = SharedOperation | RelationOperation

export type CameraData = { device_make: string | null; device_model: string | null; color_space: string | null; color_profile: ColorProfile | null; focal_length: number | null; shutter_speed: number | null; flash: Flash | null; orientation: Orientation; lens_make: string | null; lens_model: string | null; bit_depth: number | null; red_eye: boolean | null; zoom: number | null; iso: number | null; software: string | null; serial_number: string | null; lens_serial_number: string | null; contrast: number | null; saturation: number | null; sharpness: number | null; composite: Composite | null }

export type ChangeNodeNameArgs = { name: string | null; p2p_enabled: boolean | null; p2p_port: MaybeUndefined<number> }

export type ColorProfile = "Normal" | "Custom" | "HDRNoOriginal" | "HDRWithOriginal" | "OriginalForHDR" | "Panorama" | "PortraitHDR" | "Portrait"

export type Composite = "Unknown" | "False" | "General" | "Live"

export type ConvertImageArgs = { location_id: number; file_path_id: number; delete_src: boolean; desired_extension: ConvertableExtension; quality_percentage: number | null }

export type ConvertableExtension = "bmp" | "dib" | "ff" | "gif" | "ico" | "jpg" | "jpeg" | "png" | "pnm" | "qoi" | "tga" | "icb" | "vda" | "vst" | "tiff" | "tif" | "heif" | "heifs" | "heic" | "heics" | "avif" | "avci" | "avcs" | "svg" | "svgz" | "pdf" | "webp"

export type CreateEphemeralFolderArgs = { path: string; name: string | null }

export type CreateFolderArgs = { location_id: number; sub_path: string | null; name: string | null }

export type CreateLibraryArgs = { name: LibraryName; default_locations?: DefaultLocations }

export type CursorOrderItem<T> = { order: SortOrder; data: T }

export type DefaultLocations = { desktop: boolean; documents: boolean; downloads: boolean; pictures: boolean; music: boolean; videos: boolean }

export type DiskType = "SSD" | "HDD" | "Removable"

export type DoubleClickAction = "openFile" | "quickPreview"

export type EditLibraryArgs = { id: string; name: LibraryName | null; description: MaybeUndefined<string> }

export type EphemeralPathOrder = { field: "name"; value: SortOrder } | { field: "sizeInBytes"; value: SortOrder } | { field: "dateCreated"; value: SortOrder } | { field: "dateModified"; value: SortOrder }

export type EphemeralPathSearchArgs = { path: string; withHiddenFiles: boolean; order?: EphemeralPathOrder | null }

export type Error = { code: ErrorCode; message: string }

/**
 * TODO
 */
export type ErrorCode = "BadRequest" | "Unauthorized" | "Forbidden" | "NotFound" | "Timeout" | "Conflict" | "PreconditionFailed" | "PayloadTooLarge" | "MethodNotSupported" | "ClientClosedRequest" | "InternalServerError"

export type ExplorerItem = { type: "Path"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: FilePathWithObject } | { type: "Object"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: ObjectWithFilePaths } | { type: "Location"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: Location } | { type: "NonIndexedPath"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: NonIndexedPathItem } | { type: "SpacedropPeer"; has_local_thumbnail: boolean; thumbnail_key: string[] | null; item: PeerMetadata }

export type ExplorerLayout = "grid" | "list" | "media"

export type ExplorerSettings<TOrder> = { layoutMode: ExplorerLayout | null; gridItemSize: number | null; mediaColumns: number | null; mediaAspectSquare: boolean | null; mediaViewWithDescendants: boolean | null; openOnDoubleClick: DoubleClickAction | null; showBytesInGridView: boolean | null; colVisibility: { [key: string]: boolean } | null; colSizes: { [key: string]: number } | null; order?: TOrder | null; showHiddenFiles?: boolean }

export type Feedback = { message: string; emoji: number }

export type FileCopierJobInit = { source_location_id: number; target_location_id: number; sources_file_path_ids: number[]; target_location_relative_directory_path: string }

export type FileCutterJobInit = { source_location_id: number; target_location_id: number; sources_file_path_ids: number[]; target_location_relative_directory_path: string }

export type FileDeleterJobInit = { location_id: number; file_path_ids: number[] }

export type FileEraserJobInit = { location_id: number; file_path_ids: number[]; passes: string }

export type FilePath = { id: number; pub_id: number[]; is_dir: boolean | null; cas_id: string | null; integrity_checksum: string | null; location_id: number | null; materialized_path: string | null; name: string | null; extension: string | null; hidden: boolean | null; size_in_bytes: string | null; size_in_bytes_bytes: number[] | null; inode: number[] | null; object_id: number | null; key_id: number | null; date_created: string | null; date_modified: string | null; date_indexed: string | null }

export type FilePathCursor = { isDir: boolean; variant: FilePathCursorVariant }

export type FilePathCursorVariant = "none" | { name: CursorOrderItem<string> } | { sizeInBytes: SortOrder } | { dateCreated: CursorOrderItem<string> } | { dateModified: CursorOrderItem<string> } | { dateIndexed: CursorOrderItem<string> } | { object: FilePathObjectCursor }

export type FilePathFilterArgs = { locations: InOrNotIn<number> } | { path: { location_id: number; path: string; include_descendants: boolean } } | { name: TextMatch } | { extension: InOrNotIn<string> } | { createdAt: Range<string> } | { modifiedAt: Range<string> } | { indexedAt: Range<string> } | { hidden: boolean }

export type FilePathObjectCursor = { dateAccessed: CursorOrderItem<string> } | { kind: CursorOrderItem<number> }

export type FilePathOrder = { field: "name"; value: SortOrder } | { field: "sizeInBytes"; value: SortOrder } | { field: "dateCreated"; value: SortOrder } | { field: "dateModified"; value: SortOrder } | { field: "dateIndexed"; value: SortOrder } | { field: "object"; value: ObjectOrder }

export type FilePathSearchArgs = { take?: number | null; orderAndPagination?: OrderAndPagination<number, FilePathOrder, FilePathCursor> | null; filter?: SearchFilterArgs[]; groupDirectories?: boolean }

export type FilePathWithObject = { id: number; pub_id: number[]; is_dir: boolean | null; cas_id: string | null; integrity_checksum: string | null; location_id: number | null; materialized_path: string | null; name: string | null; extension: string | null; hidden: boolean | null; size_in_bytes: string | null; size_in_bytes_bytes: number[] | null; inode: number[] | null; object_id: number | null; key_id: number | null; date_created: string | null; date_modified: string | null; date_indexed: string | null; object: Object | null }

export type Filter = { value: string; name: string; icon: string | null; filter_type: number }

export type Flash = { mode: FlashMode; fired: boolean | null; returned: boolean | null; red_eye_reduction: boolean | null }

export type FlashMode = "Unknown" | "On" | "Off" | "Auto" | "Forced"

export type FromPattern = { pattern: string; replace_all: boolean }

export type FullRescanArgs = { location_id: number; reidentify_objects: boolean }

export type GenerateThumbsForLocationArgs = { id: number; path: string; regenerate?: boolean }

export type GetAll = { backups: Backup[]; directory: string }

export type GetArgs = { id: number }

export type Header = { id: string; timestamp: string; library_id: string; library_name: string }

export type IdentifyUniqueFilesArgs = { id: number; path: string }

export type ImageMetadata = { resolution: Resolution; date_taken: MediaDate | null; location: MediaLocation | null; camera_data: CameraData; artist: string | null; description: string | null; copyright: string | null; exif_version: string | null }

export type InOrNotIn<T> = { in: T[] } | { notIn: T[] }

export type IndexerRule = { id: number; pub_id: number[]; name: string | null; default: boolean | null; rules_per_kind: number[] | null; date_created: string | null; date_modified: string | null }

/**
 * `IndexerRuleCreateArgs` is the argument received from the client using rspc to create a new indexer rule.
 * Note that `rules` field is a vector of tuples of `RuleKind` and `parameters`.
 * 
 * In case of  `RuleKind::AcceptFilesByGlob` or `RuleKind::RejectFilesByGlob`, it will be a
 * vector of strings containing a glob patterns.
 * 
 * In case of `RuleKind::AcceptIfChildrenDirectoriesArePresent` or `RuleKind::RejectIfChildrenDirectoriesArePresent` the
 * `parameters` field must be a vector of strings containing the names of the directories.
 */
export type IndexerRuleCreateArgs = { name: string; dry_run: boolean; rules: ([RuleKind, string[]])[] }

export type InstanceState = "Unavailable" | { Discovered: PeerId } | { Connected: PeerId }

export type InvalidateOperationEvent = { type: "single"; data: SingleInvalidateOperationEvent } | { type: "all" }

export type JobGroup = { id: string; action: string | null; status: JobStatus; created_at: string; jobs: JobReport[] }

export type JobProgressEvent = { id: string; library_id: string; task_count: number; completed_task_count: number; phase: string; message: string; estimated_completion: string }

export type JobReport = { id: string; name: string; action: string | null; data: number[] | null; metadata: any | null; is_background: boolean; errors_text: string[]; created_at: string | null; started_at: string | null; completed_at: string | null; parent_id: string | null; status: JobStatus; task_count: number; completed_task_count: number; phase: string; message: string; estimated_completion: string }

export type JobStatus = "Queued" | "Running" | "Completed" | "Canceled" | "Failed" | "Paused" | "CompletedWithErrors"

/**
 * Can wrap a query argument to require it to contain a `library_id` and provide helpers for working with libraries.
 */
export type LibraryArgs<T> = { library_id: string; arg: T }

/**
 * LibraryConfig holds the configuration for a specific library. This is stored as a '{uuid}.sdlibrary' file.
 */
export type LibraryConfig = { name: LibraryName; description: string | null; instance_id: number }

export type LibraryConfigWrapped = { uuid: string; instance_id: string; instance_public_key: string; config: LibraryConfig }

export type LibraryData = { instances: { [key: string]: InstanceState } }

export type LibraryName = string

export type LibraryPreferences = { location?: { [key: string]: LocationSettings } }

export type LightScanArgs = { location_id: number; sub_path: string }

export type Location = { id: number; pub_id: number[]; name: string | null; path: string | null; total_capacity: number | null; available_capacity: number | null; size_in_bytes: number[] | null; is_archived: boolean | null; generate_preview_media: boolean | null; sync_preview_media: boolean | null; hidden: boolean | null; date_created: string | null; instance_id: number | null }

/**
 * `LocationCreateArgs` is the argument received from the client using `rspc` to create a new location.
 * It has the actual path and a vector of indexer rules ids, to create many-to-many relationships
 * between the location and indexer rules.
 */
export type LocationCreateArgs = { path: string; dry_run: boolean; indexer_rules_ids: number[] }

export type LocationSettings = { explorer: ExplorerSettings<FilePathOrder> }

/**
 * `LocationUpdateArgs` is the argument received from the client using `rspc` to update a location.
 * It contains the id of the location to be updated, possible a name to change the current location's name
 * and a vector of indexer rules ids to add or remove from the location.
 * 
 * It is important to note that only the indexer rule ids in this vector will be used from now on.
 * Old rules that aren't in this vector will be purged.
 */
export type LocationUpdateArgs = { id: number; name: string | null; generate_preview_media: boolean | null; sync_preview_media: boolean | null; hidden: boolean | null; indexer_rules_ids: number[]; path: string | null }

export type LocationWithIndexerRules = { id: number; pub_id: number[]; name: string | null; path: string | null; total_capacity: number | null; available_capacity: number | null; size_in_bytes: number[] | null; is_archived: boolean | null; generate_preview_media: boolean | null; sync_preview_media: boolean | null; hidden: boolean | null; date_created: string | null; instance_id: number | null; indexer_rules: { indexer_rule: IndexerRule }[] }

export type MaybeUndefined<T> = null | null | T

export type MediaDataOrder = { field: "epochTime"; value: SortOrder }

/**
 * This can be either naive with no TZ (`YYYY-MM-DD HH-MM-SS`) or UTC (`YYYY-MM-DD HH-MM-SS ±HHMM`),
 * where `±HHMM` is the timezone data. It may be negative if West of the Prime Meridian, or positive if East.
 */
export type MediaDate = string | string

export type MediaLocation = { latitude: number; longitude: number; pluscode: PlusCode; altitude: number | null; direction: number | null }

export type MediaMetadata = ({ type: "Image" } & ImageMetadata) | ({ type: "Video" } & VideoMetadata) | ({ type: "Audio" } & AudioMetadata)

export type NodeState = ({ id: string; name: string; p2p_enabled: boolean; p2p_port: number | null; features: BackendFeature[] }) & { data_path: string }

export type NonIndexedFileSystemEntries = { entries: ExplorerItem[]; errors: Error[] }

export type NonIndexedPathItem = { path: string; name: string; extension: string; kind: number; is_dir: boolean; date_created: string; date_modified: string; size_in_bytes_bytes: number[]; hidden: boolean }

/**
 * Represents a single notification.
 */
export type Notification = ({ type: "library"; id: [string, number] } | { type: "node"; id: number }) & { data: NotificationData; read: boolean; expires: string | null }

/**
 * Represents the data of a single notification.
 * This data is used by the frontend to properly display the notification.
 */
export type NotificationData = { PairingRequest: { id: string; pairing_id: number } } | "Test"

export type NotificationId = { type: "library"; id: [string, number] } | { type: "node"; id: number }

export type Object = { id: number; pub_id: number[]; kind: number | null; key_id: number | null; hidden: boolean | null; favorite: boolean | null; important: boolean | null; note: string | null; date_created: string | null; date_accessed: string | null }

export type ObjectCursor = "none" | { dateAccessed: CursorOrderItem<string> } | { kind: CursorOrderItem<number> }

export type ObjectFilterArgs = { favorite: boolean } | { hidden: ObjectHiddenFilter } | { kind: InOrNotIn<number> } | { tags: InOrNotIn<number> } | { dateAccessed: Range<string> }

export type ObjectHiddenFilter = "exclude" | "include"

export type ObjectOrder = { field: "dateAccessed"; value: SortOrder } | { field: "kind"; value: SortOrder } | { field: "mediaData"; value: MediaDataOrder }

export type ObjectSearchArgs = { take: number; orderAndPagination?: OrderAndPagination<number, ObjectOrder, ObjectCursor> | null; filter?: SearchFilterArgs[] }

export type ObjectValidatorArgs = { id: number; path: string }

export type ObjectWithFilePaths = { id: number; pub_id: number[]; kind: number | null; key_id: number | null; hidden: boolean | null; favorite: boolean | null; important: boolean | null; note: string | null; date_created: string | null; date_accessed: string | null; file_paths: FilePath[] }

/**
 * Represents the operating system which the remote peer is running.
 * This is not used internally and predominantly is designed to be used for display purposes by the embedding application.
 */
export type OperatingSystem = "Windows" | "Linux" | "MacOS" | "Ios" | "Android" | { Other: string }

export type OrderAndPagination<TId, TOrder, TCursor> = { orderOnly: TOrder } | { offset: { offset: number; order: TOrder | null } } | { cursor: { id: TId; cursor: TCursor } }

export type Orientation = "Normal" | "CW90" | "CW180" | "CW270" | "MirroredVertical" | "MirroredHorizontal" | "MirroredHorizontalAnd90CW" | "MirroredHorizontalAnd270CW"

/**
 * TODO: P2P event for the frontend
 */
export type P2PEvent = { type: "DiscoveredPeer"; peer_id: PeerId; metadata: PeerMetadata } | { type: "ExpiredPeer"; peer_id: PeerId } | { type: "ConnectedPeer"; peer_id: PeerId } | { type: "DisconnectedPeer"; peer_id: PeerId } | { type: "SpacedropRequest"; id: string; peer_id: PeerId; peer_name: string; files: string[] } | { type: "SpacedropProgress"; id: string; percent: number } | { type: "SpacedropTimedout"; id: string } | { type: "SpacedropRejected"; id: string } | { type: "PairingRequest"; id: number; name: string; os: OperatingSystem } | { type: "PairingProgress"; id: number; status: PairingStatus }

export type PairingDecision = { decision: "accept"; libraryId: string } | { decision: "reject" }

export type PairingStatus = { type: "EstablishingConnection" } | { type: "PairingRequested" } | { type: "LibraryAlreadyExists" } | { type: "PairingDecisionRequest" } | { type: "PairingInProgress"; data: { library_name: string; library_description: string | null } } | { type: "InitialSyncProgress"; data: number } | { type: "PairingComplete"; data: string } | { type: "PairingRejected" }

export type PeerId = string

export type PeerMetadata = { name: string; operating_system: OperatingSystem | null; version: string | null; email: string | null; img_url: string | null }

export type PlusCode = string

export type Range<T> = { from: T } | { to: T }

export type RelationOperation = { relation_item: any; relation_group: any; relation: string; data: RelationOperationData }

export type RelationOperationData = "c" | { u: { field: string; value: any } } | "d"

export type RenameFileArgs = { location_id: number; kind: RenameKind }

export type RenameKind = { One: RenameOne } | { Many: RenameMany }

export type RenameMany = { from_pattern: FromPattern; to_pattern: string; from_file_path_ids: number[] }

export type RenameOne = { from_file_path_id: number; to: string }

export type RescanArgs = { location_id: number; sub_path: string }

export type Resolution = { width: number; height: number }

export type Response = { Start: { user_code: string; verification_url: string; verification_url_complete: string } } | "Complete" | "Error"

export type RuleKind = "AcceptFilesByGlob" | "RejectFilesByGlob" | "AcceptIfChildrenDirectoriesArePresent" | "RejectIfChildrenDirectoriesArePresent"

export type SanitisedNodeConfig = { id: string; name: string; p2p_enabled: boolean; p2p_port: number | null; features: BackendFeature[] }

export type SavedSearch = { id: number; pub_id: number[]; filters: number[] | null; name: string | null; icon: string | null; description: string | null; order: number | null; date_created: string | null; date_modified: string | null }

export type SavedSearchCreateArgs = { name: string | null; filters: Filter[] | null; description: string | null; icon: string | null }

export type SavedSearchResponse = { id: number; pub_id: number[]; name: string | null; icon: string | null; description: string | null; order: number | null; date_created: string | null; date_modified: string | null; filters: Filter[] | null }

export type SavedSearchUpdateArgs = { id: number; name: string | null; filters: Filter[] | null; description: string | null; icon: string | null }

export type SearchData<T> = { cursor: number[] | null; items: T[] }

export type SearchFilterArgs = { filePath: FilePathFilterArgs } | { object: ObjectFilterArgs }

export type SetFavoriteArgs = { id: number; favorite: boolean }

export type SetNoteArgs = { id: number; note: string | null }

export type SharedOperation = { record_id: any; model: string; data: SharedOperationData }

export type SharedOperationData = "c" | { u: { field: string; value: any } } | "d"

export type SingleInvalidateOperationEvent = { key: string; arg: any; result: any | null }

export type SortOrder = "Asc" | "Desc"

export type SpacedropArgs = { peer_id: PeerId; file_path: string[] }

export type Statistics = { id: number; date_captured: string; total_object_count: number; library_db_size: string; total_bytes_used: string; total_bytes_capacity: string; total_unique_bytes: string; total_bytes_free: string; preview_media_bytes: string }

export type SystemLocations = { desktop: string | null; documents: string | null; downloads: string | null; pictures: string | null; music: string | null; videos: string | null }

export type Tag = { id: number; pub_id: number[]; name: string | null; color: string | null; redundancy_goal: number | null; date_created: string | null; date_modified: string | null }

export type TagAssignArgs = { object_ids: number[]; tag_id: number; unassign: boolean }

export type TagCreateArgs = { name: string; color: string }

export type TagUpdateArgs = { id: number; name: string | null; color: string | null }

export type TextMatch = { contains: string } | { startsWith: string } | { endsWith: string } | { equals: string }

export type VideoMetadata = { duration: number | null; video_codec: string | null; audio_codec: string | null }

export type Volume = { name: string; mount_points: string[]; total_capacity: string; available_capacity: string; disk_type: DiskType; file_system: string | null; is_root_filesystem: boolean }
