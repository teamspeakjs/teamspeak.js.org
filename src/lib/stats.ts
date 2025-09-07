interface PackageStats {
  weeklyDownloads: number;
  stars: number;
  forks: number;
  latestVersion: string;
}

export async function getPackageStats(): Promise<PackageStats> {
  try {
    // Fetch NPM stats
    const [downloadsRes, packageRes] = await Promise.all([
      fetch("https://api.npmjs.org/downloads/point/last-week/teamspeak.js"),
      fetch("https://registry.npmjs.org/teamspeak.js"),
    ]);

    const downloads = await downloadsRes.json();
    const packageInfo = await packageRes.json();

    // Fetch GitHub stats
    const githubRes = await fetch(
      "https://api.github.com/repos/teamspeakjs/teamspeak.js"
    );
    const githubData = await githubRes.json();

    return {
      weeklyDownloads: downloads.downloads,
      stars: githubData.stargazers_count,
      forks: githubData.forks_count,
      latestVersion: `v${packageInfo["dist-tags"].latest}`,
    };
  } catch (error) {
    console.error("Error fetching package stats:", error);
    return {
      weeklyDownloads: 0,
      stars: 0,
      forks: 0,
      latestVersion: "v0.0.0",
    };
  }
}
