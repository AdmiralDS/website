<script lang="ts">
  import { Toggle } from '@components/atoms';
  import { ArrowButtons } from '@components/molecules';
  import { onMount } from 'svelte';
  import DragOutline from '@admiral-ds/icons/build/service/DragOutline.svg';
  import DragSolid from '@admiral-ds/icons/build/service/DragSolid.svg';
  import EquallyOutline from '@admiral-ds/icons/build/service/EquallyOutline.svg';
  import EquallySolid from '@admiral-ds/icons/build/service/EquallySolid.svg';
  import ErrorOutline from '@admiral-ds/icons/build/service/ErrorOutline.svg';
  import ErrorSolid from '@admiral-ds/icons/build/service/ErrorSolid.svg';
  import ErrorTriangleOutline from '@admiral-ds/icons/build/service/ErrorTriangleOutline.svg';
  import ErrorTriangleSolid from '@admiral-ds/icons/build/service/ErrorTriangleSolid.svg';
  import JpgOutline from '@admiral-ds/icons/build/documents/JpgOutline.svg';
  import JpgSolid from '@admiral-ds/icons/build/documents/JpgSolid.svg';
  import ArchiveOutline from '@admiral-ds/icons/build/service/ArchiveOutline.svg';
  import ArchiveSolid from '@admiral-ds/icons/build/service/ArchiveSolid.svg';
  import BonusOutline from '@admiral-ds/icons/build/category/BonusOutline.svg';
  import BonusSolid from '@admiral-ds/icons/build/category/BonusSolid.svg';
  import BrokerOutline from '@admiral-ds/icons/build/finance/BrokerOutline.svg';
  import BrokerSolid from '@admiral-ds/icons/build/finance/BrokerSolid.svg';
  import CloudDoneOutline from '@admiral-ds/icons/build/system/CloudDoneOutline.svg';
  import CloudDoneSolid from '@admiral-ds/icons/build/system/CloudDoneSolid.svg';
  import CutOutline from '@admiral-ds/icons/build/service/CutOutline.svg';
  import CutSolid from '@admiral-ds/icons/build/service/CutSolid.svg';
  import DiamondOutline from '@admiral-ds/icons/build/category/DiamondOutline.svg';
  import DiamondSolid from '@admiral-ds/icons/build/category/DiamondSolid.svg';
  import EraserOutline from '@admiral-ds/icons/build/redact/EraserOutline.svg';
  import EraserSolid from '@admiral-ds/icons/build/redact/EraserSolid.svg';
  import EyeOffOutline from '@admiral-ds/icons/build/service/EyeOffOutline.svg';
  import EyeOffSolid from '@admiral-ds/icons/build/service/EyeOffSolid.svg';
  import FinanceOutline from '@admiral-ds/icons/build/finance/FinanceOutline.svg';
  import FinanceSolid from '@admiral-ds/icons/build/finance/FinanceSolid.svg';
  import FingerprintOutline from '@admiral-ds/icons/build/security/FingerprintOutline.svg';
  import FingerprintSolid from '@admiral-ds/icons/build/security/FingerprintSolid.svg';
  import FormatPaintOutline from '@admiral-ds/icons/build/redact/FormatPaintOutline.svg';
  import FormatPaintSolid from '@admiral-ds/icons/build/redact/FormatPaintSolid.svg';
  import GovernmentOutline from '@admiral-ds/icons/build/category/GovernmentOutline.svg';
  import GovernmentSolid from '@admiral-ds/icons/build/category/GovernmentSolid.svg';
  import GPSOutline from '@admiral-ds/icons/build/location/GPSOutline.svg';
  import GPSSolid from '@admiral-ds/icons/build/location/GPSSolid.svg';
  import HelpOutline from '@admiral-ds/icons/build/service/HelpOutline.svg';
  import HelpSolid from '@admiral-ds/icons/build/service/HelpSolid.svg';
  import IncognitoOutline from '@admiral-ds/icons/build/security/IncognitoOutline.svg';
  import IncognitoSolid from '@admiral-ds/icons/build/security/IncognitoSolid.svg';
  import JPYOutline from '@admiral-ds/icons/build/finance/JPYOutline.svg';
  import JPYSolid from '@admiral-ds/icons/build/finance/JPYSolid.svg';
  import LocationOutline from '@admiral-ds/icons/build/location/LocationOutline.svg';
  import LocationSolid from '@admiral-ds/icons/build/location/LocationSolid.svg';
  import MicrophoneOutline from '@admiral-ds/icons/build/system/MicrophoneOutline.svg';
  import MicrophoneSolid from '@admiral-ds/icons/build/system/MicrophoneSolid.svg';
  import PhoneOutline from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
  import PhoneSolid from '@admiral-ds/icons/build/communication/PhoneSolid.svg';
  import SafetyOutline from '@admiral-ds/icons/build/security/SafetyOutline.svg';
  import SafetySolid from '@admiral-ds/icons/build/security/SafetySolid.svg';
  import SettingsOutline from '@admiral-ds/icons/build/system/SettingsOutline.svg';
  import SettingsSolid from '@admiral-ds/icons/build/system/SettingsSolid.svg';
  import ShareOutline from '@admiral-ds/icons/build/service/ShareOutline.svg';
  import ShareSolid from '@admiral-ds/icons/build/service/ShareSolid.svg';
  import SignOutline from '@admiral-ds/icons/build/documents/SignOutline.svg';
  import SignSolid from '@admiral-ds/icons/build/documents/SignSolid.svg';
  import TreasuryOutline from '@admiral-ds/icons/build/finance/TreasuryOutline.svg';
  import TreasurySolid from '@admiral-ds/icons/build/finance/TreasurySolid.svg';
  import TuneOutline from '@admiral-ds/icons/build/system/TuneOutline.svg';
  import TuneSolid from '@admiral-ds/icons/build/system/TuneSolid.svg';
  import UnlockOutline from '@admiral-ds/icons/build/security/UnlockOutline.svg';
  import UnlockSolid from '@admiral-ds/icons/build/security/UnlockSolid.svg';
  import WifiOutline from '@admiral-ds/icons/build/communication/WifiOutline.svg';
  import WifiSolid from '@admiral-ds/icons/build/communication/WifiSolid.svg';

  import { fade } from 'svelte/transition';
  import { MobilePlug } from '@components/atoms';
  import { MOBILE_WIDTH } from '@components/const';

  let scrollingContainer: HTMLDivElement;
  let left: number = 0;
  let step = 67 * 4;
  let scrolledToRight: boolean = false;
  let style: string = '';

  $: innerWidth = 0;

  const iconsOutline = [
    { name: 'Drag', icon: DragOutline },
    { name: 'Equally', icon: EquallyOutline },
    { name: 'Error', icon: ErrorOutline },
    { name: 'Triangle', icon: ErrorTriangleOutline },
    { name: 'Jpg', icon: JpgOutline },
    { name: 'Archive', icon: ArchiveOutline },
    { name: 'Bonus', icon: BonusOutline },
    { name: 'Broker', icon: BrokerOutline },
    { name: 'Cloud Done', icon: CloudDoneOutline },
    { name: 'Cut', icon: CutOutline },
    { name: 'Diamond', icon: DiamondOutline },
    { name: 'Eraser', icon: EraserOutline },
    { name: 'Eye Off', icon: EyeOffOutline },
    { name: 'Finance', icon: FinanceOutline },
    { name: 'Fingerprint', icon: FingerprintOutline },
    { name: 'Paint', icon: FormatPaintOutline },
    { name: 'Government', icon: GovernmentOutline },
    { name: 'GPS', icon: GPSOutline },
    { name: 'Help', icon: HelpOutline },
    { name: 'Incognito', icon: IncognitoOutline },
    { name: 'JPY', icon: JPYOutline },
    { name: 'Location', icon: LocationOutline },
    { name: 'Microphone', icon: MicrophoneOutline },
    { name: 'Phone', icon: PhoneOutline },
    { name: 'Safety', icon: SafetyOutline },
    { name: 'Settings', icon: SettingsOutline },
    { name: 'Share', icon: ShareOutline },
    { name: 'Sign', icon: SignOutline },
    { name: 'Treasury', icon: TreasuryOutline },
    { name: 'Tune', icon: TuneOutline },
    { name: 'Unlock', icon: UnlockOutline },
    { name: 'WiFi', icon: WifiOutline },
  ];
  const iconsSolid = [
    { name: 'Drag', icon: DragSolid },
    { name: 'Equally', icon: EquallySolid },
    { name: 'Error', icon: ErrorSolid },
    { name: 'Triangle', icon: ErrorTriangleSolid },
    { name: 'Jpg', icon: JpgSolid },
    { name: 'Archive', icon: ArchiveSolid },
    { name: 'Bonus', icon: BonusSolid },
    { name: 'Broker', icon: BrokerSolid },
    { name: 'Cloud Done', icon: CloudDoneSolid },
    { name: 'Cut', icon: CutSolid },
    { name: 'Diamond', icon: DiamondSolid },
    { name: 'Eraser', icon: EraserSolid },
    { name: 'Eye Off', icon: EyeOffSolid },
    { name: 'Finance', icon: FinanceSolid },
    { name: 'Fingerprint', icon: FingerprintSolid },
    { name: 'Paint', icon: FormatPaintSolid },
    { name: 'Government', icon: GovernmentSolid },
    { name: 'GPS', icon: GPSSolid },
    { name: 'Help', icon: HelpSolid },
    { name: 'Incognito', icon: IncognitoSolid },
    { name: 'JPY', icon: JPYSolid },
    { name: 'Location', icon: LocationSolid },
    { name: 'Microphone', icon: MicrophoneSolid },
    { name: 'Phone', icon: PhoneSolid },
    { name: 'Safety', icon: SafetySolid },
    { name: 'Settings', icon: SettingsSolid },
    { name: 'Share', icon: ShareSolid },
    { name: 'Sign', icon: SignSolid },
    { name: 'Treasury', icon: TreasurySolid },
    { name: 'Tune', icon: TuneSolid },
    { name: 'Unlock', icon: UnlockSolid },
    { name: 'WiFi', icon: WifiSolid },
  ];

  // управление состоянием solid
  $: isSolid = false;
  const handleClickOnSolid = () => (isSolid = !isSolid);

  // управление промоткой иконок
  $: prevDisabled = true;
  $: nextDisabled = false;
  $: iconsArray = isSolid ? iconsSolid : iconsOutline;

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


  let touchstartX = 0;

const handleTouchStart = (event) => {
  touchstartX = event.changedTouches[0].screenX;
};

const handleTouchEnd = (event) => {
  const touchendX = event.changedTouches[0].screenX;
  
  if (touchendX < touchstartX) {
      handleNextClick();
    }
    if (touchendX > touchstartX) {
      handlePrevClick();
  }
};
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= MOBILE_WIDTH}
<div class="icons-block__icon-tile" 
  on:touchstart={handleTouchStart} 
  on:touchend={handleTouchEnd}
>
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
<!--            todo: Вынести в отдельный компонент для transition -->
            <div class="icons-block__icon-wrapper" transition:fade={{duration: 3000}}>
              <svelte:component this={icon} class="icons-block__icon"></svelte:component>
            </div>
            {name}
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="icon-switcher__plug-wrapper">
    <MobilePlug />
  </div>
</div>
{:else}
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
  <!--            todo: Вынести в отдельный компонент для transition -->
              <div class="icons-block__icon-wrapper" transition:fade={{duration: 3000}}>
                <svelte:component this={icon} class="icons-block__icon"></svelte:component>
              </div>
              {name}
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="icons-block__arrows-wrapper">
      <ArrowButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick} {prevDisabled} {nextDisabled} />
    </div>
    <div class="icon-switcher__plug-wrapper">
      <MobilePlug />
    </div>
  </div>
{/if}

<style lang="css">
  @import 'iconSwitcher.css';
</style>
