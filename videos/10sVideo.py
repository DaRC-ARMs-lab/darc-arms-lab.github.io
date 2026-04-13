from moviepy import VideoFileClip
import os

# ===== CONFIG =====
input_video = "videos\\26Spring - DaRC ARMS (One Slide Project Overviews).mp4"   # your video file
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

    output_path = os.path.join(output_dir, f"clip_{clip_index:02d}.mp4")

    print(f"Exporting {output_path} ({start}s → {end}s)")

    clip.write_videofile(
        output_path,
        codec="libx264",
        audio_codec="aac",
        fps=24
    )

    clip_index += 1

video.close()
print("Done 🎬")