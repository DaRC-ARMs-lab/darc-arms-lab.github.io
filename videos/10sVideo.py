from moviepy import VideoFileClip
import os

# ===== CONFIG =====
input_video = "videos\\26Spring - DaRC ARMS (One Slide Project Overviews).mp4"
output_dir = "videos/clips"
clip_duration = 10  # seconds
# ==================

# Create output folder
os.makedirs(output_dir, exist_ok=True)

# Load video
video = VideoFileClip(input_video)
video_duration = int(video.duration)

print(f"Total video duration: {video_duration} seconds")

# Split into clips
clip_index = 0
for start in range(0, video_duration, clip_duration):
    end = min(start + clip_duration, video_duration)

    clip = video.subclipped(start, end)

    base_name = f"clip_{clip_index:02d}"

    mp4_path = os.path.join(output_dir, f"{base_name}.mp4")
    webm_path = os.path.join(output_dir, f"{base_name}.webm")

    print(f"Exporting {base_name} ({start}s → {end}s)")

    # ===== MP4 =====
    clip.write_videofile(
        mp4_path,
        codec="libx264",
        audio_codec="aac",
        fps=24
    )

    # ===== WEBM =====
    clip.write_videofile(
        webm_path,
        codec="libvpx-vp9",
        audio=False,      # better for web autoplay
        fps=24,
        bitrate="1M"
    )

    clip_index += 1

video.close()
print("Done 🎬")