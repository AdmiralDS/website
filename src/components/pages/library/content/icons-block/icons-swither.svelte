<script lang="ts">
  import { ArrowButtons, Toggle } from '@components/ui-kit/Svelte';
  import * as Icons from '@components/ui-kit/Svelte';
  import { onMount } from 'svelte';

  let scrollingContainer: HTMLDivElement;
  let left: number = 0;
  let step = 67 * 4;
  let scrolledToRight: boolean = false;
  let style: string = undefined;

  const iconsOutline = [
    { name: 'Drag Out', icon: Icons.DragOutline },
    { name: 'Equally', icon: Icons.EquallyOutline },
    { name: 'Error Out', icon: Icons.ErrorOutline },
    { name: 'Triangle', icon: Icons.ErrorTriangleOutline },
    { name: 'Jpg', icon: Icons.JpgOutline },
    { name: 'Archive', icon: Icons.ArchiveOutline },
    { name: 'Bonus', icon: Icons.BonusOutline },
    { name: 'Broker', icon: Icons.BrokerOutline },
    { name: 'Cloud Done', icon: Icons.CloudDoneOutline },
    { name: 'Cut', icon: Icons.CutOutline },
    { name: 'Diamond', icon: Icons.DiamondOutline },
    { name: 'Eraser', icon: Icons.EraserOutline },
    { name: 'Eye Off', icon: Icons.EyeOffOutline },
    { name: 'Finance', icon: Icons.FinanceOutline },
    { name: 'Fingerprint', icon: Icons.FingerprintOutline },
    { name: 'Format Paint', icon: Icons.FormatPaintOutline },
    { name: 'Government', icon: Icons.GovernmentOutline },
    { name: 'GPS', icon: Icons.GpsOutline },
    { name: 'Help', icon: Icons.HelpOutline },
    { name: 'Incognito', icon: Icons.IncognitoOutline },
    { name: 'JPY', icon: Icons.JpyOutline },
    { name: 'Location', icon: Icons.LocationOutline },
    { name: 'Microphone', icon: Icons.MicrophoneOutline },
    { name: 'Phone', icon: Icons.PhoneOutline },
    { name: 'Safety', icon: Icons.SafetyOutline },
    { name: 'Settings', icon: Icons.SettingsOutline },
    { name: 'Share', icon: Icons.ShareOutline },
    { name: 'Sign', icon: Icons.SignOutline },
    { name: 'Treasury', icon: Icons.TreasuryOutline },
    { name: 'Tune', icon: Icons.TuneOutline },
    { name: 'Unlock', icon: Icons.UnlockOutline },
    { name: 'WiFi', icon: Icons.WiFiOutline },
  ];
  const iconsSolid = [
    { name: 'Drag', icon: Icons.DragSolid },
    { name: 'Equally', icon: Icons.EquallySolid },
    { name: 'Error', icon: Icons.ErrorSolid },
    { name: 'Triangle', icon: Icons.ErrorTriangleSolid },
    { name: 'Jpg', icon: Icons.JpgSolid },
    { name: 'Archive', icon: Icons.ArchiveSolid },
    { name: 'Bonus', icon: Icons.BonusSolid },
    { name: 'Broker', icon: Icons.BrokerSolid },
    { name: 'Cloud Done', icon: Icons.CloudDoneSolid },
    { name: 'Cut', icon: Icons.CutSolid },
    { name: 'Diamond', icon: Icons.DiamondSolid },
    { name: 'Eraser', icon: Icons.EraserSolid },
    { name: 'Eye Off', icon: Icons.EyeOffSolid },
    { name: 'Finance', icon: Icons.FinanceSolid },
    { name: 'Fingerprint', icon: Icons.FingerprintSolid },
    { name: 'Format Paint', icon: Icons.FormatPaintSolid },
    { name: 'Government', icon: Icons.GovernmentSolid },
    { name: 'GPS', icon: Icons.GpsSolid },
    { name: 'Help', icon: Icons.HelpSolid },
    { name: 'Incognito', icon: Icons.IncognitoSolid },
    { name: 'JPY', icon: Icons.JpySolid },
    { name: 'Location', icon: Icons.LocationSolid },
    { name: 'Microphone', icon: Icons.MicrophoneSolid },
    { name: 'Phone', icon: Icons.PhoneSolid },
    { name: 'Safety', icon: Icons.SafetySolid },
    { name: 'Settings', icon: Icons.SettingsSolid },
    { name: 'Share', icon: Icons.ShareSolid },
    { name: 'Sign', icon: Icons.SignSolid },
    { name: 'Treasury', icon: Icons.TreasurySolid },
    { name: 'Tune', icon: Icons.TuneSolid },
    { name: 'Unlock', icon: Icons.UnlockSolid },
    { name: 'WiFi', icon: Icons.WiFiSolid },
  ];

  // управление состоянием solid
  $: isSolid = false;
  const handleClickOnSolid = () => (isSolid = !isSolid);

  // управление промоткой иконок
  const STEP = 4;
  $: currentIndex = 0;
  $: prevDisabled = true;
  $: nextDisabled = false;
  $: iconsArray = isSolid ? iconsSolid : iconsOutline;
  $: elsToShow = iconsArray.slice(currentIndex, currentIndex + STEP);

  const checkButtonsEnable = () => {
    if (!scrollingContainer) return;

    const parent = scrollingContainer.parentElement as HTMLDivElement;

    prevDisabled = left === 0;
    nextDisabled = left + parent.clientWidth >= scrollingContainer.clientWidth;
    scrolledToRight = nextDisabled;
  };

  onMount(() => {
    checkButtonsEnable();
  });

  const handleNextClick = () => {
    if (!scrollingContainer) return;
    const parent = scrollingContainer.parentElement as HTMLDivElement;

    const newValue = left + step;

    const maxValue = scrollingContainer.clientWidth - parent.clientWidth;

    left = newValue > maxValue ? maxValue : newValue;
  };

  const handlePrevClick = () => {
    if (scrolledToRight) scrolledToRight = false;

    left = left - step < 0 ? 0 : left - step;
  };

  $: {
    const floatValue = scrolledToRight ? 'inline-end' : 'inline-start';
    const translateXValue = `-${left}px`;
    const leftValue = scrolledToRight ? `${left}px` : 0;
    style = `float: ${floatValue}; transform: translateX(${translateXValue}); left: ${leftValue}`;
  }
</script>

<div class="icons-block__icon-tile">
  <div class="icons-block__tile-header">
    <div class="icons-block__tile-heading">Actions</div>
    <div class="icons-block__switcher-wrapper">
      <Toggle on:click={handleClickOnSolid} />
      <div class="icons-block__switcher-title">Solid</div>
    </div>
  </div>

  <div class="icons-block__icons-container">
    <div class="icons-block__icons-wrapper">
      <div
        class="icons-block__scrolling-container"
        bind:this={scrollingContainer}
        {style}
        on:transitionend={checkButtonsEnable}
      >
        {#each iconsArray as { name, icon }}
          <div class="icons-block__icon-container">
            <div class="icons-block__icon-wrapper">
              <svelte:component this={icon}></svelte:component>
            </div>
            {name}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <ArrowButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick} {prevDisabled} {nextDisabled} />
</div>

<style lang="css"></style>
