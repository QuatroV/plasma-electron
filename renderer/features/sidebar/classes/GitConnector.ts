import { simpleGit, SimpleGit, CheckRepoActions } from "simple-git";
import { Remote } from "../stores/gitStore";

class GitConnector {
  private _git: SimpleGit;
  private _isRepo: boolean;
  private _remoteUrls: Remote[];

  constructor() {}

  async init(rootPath: string, callback?: () => void) {
    this._git = simpleGit(rootPath);
    this._isRepo = await this._git.checkIsRepo(CheckRepoActions.IS_REPO_ROOT);
    const remotes = await this._git.getRemotes(true);

    this._remoteUrls = [];

    for (let i = 0; i < remotes.length; i++) {
      const remoteBranches = await this.getRemoteBranches();
      const localBranches = await this.getLocalBranches();
      this._remoteUrls[i] = {
        ...remotes[i],
        current: i === 0,
        branches: [...remoteBranches, ...localBranches],
      };
    }

    callback && callback.bind(this)();
  }

  async initRepo() {
    await this._git.init();
  }

  async getStatus() {
    const statusSummary = await this._git.status();

    return statusSummary;
  }

  get isRepo() {
    return this._isRepo;
  }

  get remoteUrls() {
    return this._remoteUrls;
  }

  async addRemote(remoteName: string, ref: string) {
    await this._git.addRemote(remoteName, ref);

    const remoteBranches = await this.getLocalBranches();

    this._remoteUrls.push({
      name: remoteName,
      current: true,
      refs: { push: ref, fetch: ref },
      branches: remoteBranches,
    });
  }

  async addFiles(fileNames: string[]) {
    await this._git.add(fileNames);
  }

  async removeFiles(fileNames: string[]) {
    await this._git.rmKeepLocal(fileNames);
  }

  async commit(message: string) {
    await this._git.commit(message);
  }

  async push() {
    await this._git.push();
  }

  async pull() {
    await this._git.pull();
  }

  async getRemoteBranches() {
    const { branches } = await this._git.branch(["-r"]);
    return Object.values(branches);
  }

  async getLocalBranches() {
    const { branches } = await this._git.branch();
    return Object.values(branches);
  }
}

const gitConnector = new GitConnector();

export default gitConnector;
